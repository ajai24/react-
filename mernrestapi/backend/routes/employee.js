const express = require('express'); 
const{
    createEmployee,getEmployees,editEmployee,deleteEmployee
} = require('../controllers/employeeController');



const router = express.Router();
router.post("/",createEmployee);
router.get("/",getEmployees);
router.put("/:id",editEmployee);
router.delete("/:e_id",deleteEmployee);

module.exports = router;