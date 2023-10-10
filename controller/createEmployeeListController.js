const db=require('../db/connection');
const employeeListController=async(req,res)=>{
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 10;
    const offset = (page - 1) * pageSize;

    db.query(
      'SELECT * FROM empdetails LIMIT ? OFFSET ?',
      [pageSize, offset],
      (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Failed to list employees.' });
        }
        db.query('SELECT COUNT(*) AS total FROM empdetails', (err, countResult) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to list employees.' });
          }
  
          const totalCount = countResult[0].total;
          const totalPages = Math.ceil(totalCount / pageSize);
  
          res.status(200).json({
            employees: results,
            page: page,
            pageSize: pageSize,
            totalPages: totalPages,
          });
        });
      }
    );
  }

  module.exports=employeeListController;
  