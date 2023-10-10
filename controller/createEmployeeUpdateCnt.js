const db=require('../db/connection');
const employeeUpdateController=async(req,res)=>{
    const employeeId = req.params.id;
    const updatedFields = req.body;
  
    db.query('SELECT * FROM empdetails WHERE id = ?', [employeeId], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to update employee.' });
      }
  
      if (results.length === 0) {
        return res.status(404).json({ error: 'Employee not found.' });
      }
      const updateQuery = [];
      const updateParams = [];
  
      for (const field in updatedFields) {
        if (field !== 'id') {
          updateQuery.push(`${field} = ?`);
          updateParams.push(updatedFields[field]);
        }
      }
  
      updateParams.push(employeeId);

      db.query(
        `UPDATE empdetails SET ${updateQuery.join(', ')} WHERE id = ?`,
        updateParams,
        (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to update employee.' });
          }
  
          res.status(200).json({ message: 'Employee updated successfully.' });
        }
      );
    });
  }

  module.exports=employeeUpdateController;
  