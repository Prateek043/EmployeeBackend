const express=require('express');
const router=express.Router();

const createEmpController=require('../controller/createEmployeeController');
const employeeListController=require('../controller/createEmployeeListController');
const employeeUpdateController=require('../controller/createEmployeeUpdateCnt');
const employeeDeleteController=require('../controller/createEmployeeDeleteCnt');
const employeeGetController=require('../controller/creteEmployeeGetCnt');


router.post('/createEmployee',createEmpController);
router.get('/employeeList',employeeListController);
router.put('/employees/:id',employeeUpdateController);
router.delete('/employeesDelete/:id',employeeDeleteController);
router.get('/employeeGet/:id',employeeGetController)

module.exports=router;