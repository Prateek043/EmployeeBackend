const db=require('../db/connection');

const employeeGetController=async(req,res)=>{
    const employeeId = req.params.id;
  
    db.query('SELECT * FROM empdetails WHERE id = ?', [employeeId], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to get employee.' });
      }
  
      if (results.length === 0) {
        return res.status(404).json({ error: 'Employee not found.' });
      }
  
      const employee = results[0];
  
      res.status(200).json(employee);
    });
  }

  module.exports=employeeGetController;