const db=require('../db/connection');
const createEmpController=async(req,res)=>{
    const {
      full_name,
      job_title,
      email,
      address,
      city,
      state,
      phone_number,
      relationship,
    } = req.body;
 
    db.query(
      'INSERT INTO empdetails (full_name, job_title, email, address, city, state, phone_number) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [full_name, job_title, email, address, city, state, phone_number],
      (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Failed to create employee.' });
        }
  
        const employeeId = result.insertId;

        db.query(
          'INSERT INTO contact_details (employee_id, relationship) VALUES (?, ?)',
          [employeeId, relationship],
          (err) => {
            if (err) {
              console.error(err);
            }
  
            res.status(201).json({ message: 'Employee created successfully.' });
          }
        );
      }
    );
  
}

module.exports=createEmpController;