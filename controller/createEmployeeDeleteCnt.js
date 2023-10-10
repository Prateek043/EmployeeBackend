const db=require('../db/connection');

const employeeDeleteController=async(req,res)=>{
    const employeeId = req.params.id;
  
    db.query('SELECT * FROM empdetails WHERE id = ?', [employeeId], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to delete employee.' });
      }
  
      if (results.length === 0) {
        return res.status(404).json({ error: 'Employee not found.' });
      }

      db.query('DELETE FROM empdetails WHERE id = ?', [employeeId], (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Failed to delete employee.' });
        }
  
        res.status(200).json({ message: 'Employee deleted successfully.' });
      });
    }); 
}

module.exports=employeeDeleteController;