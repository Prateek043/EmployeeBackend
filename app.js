const express=require('express');
const bodyParser=require('body-parser');
const con=require('./db/connection');
const router=require('./routes/employeeRoutes');
const app=express();

con.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
  });

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/api',router);

app.get('/',(req,res)=>{
    res.json("Hello from the Backend");
})

app.listen(PORT,()=>{
    console.log(`Server is running at port no ${PORT}`);
})