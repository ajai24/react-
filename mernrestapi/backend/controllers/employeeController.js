const Employee = require('../models/Employee');


exports.createEmployee = async (req, res) => {
    try{
        const {empid, empName} = req.body;
        const newEmployee = new Employee({empid, empName});
        const savedEmployee = await newEmployee.save();
        res.status(200).json(savedEmployee);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};

exports.getEmployees = async (req, res) => {
    try{
        const employees = await Employee.find();
        res.status(200).json(employees);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};

exports.editEmployee = async (req, res) => {
    try{
        const e_id = req.params.id;
        const {empid, empName} = req.body;
        const updatedEmployee = await Employee.findByIdAndUpdate(e_id,{empid, empName},{new:true});
        if(!updatedEmployee) {
            res.status(404).json({error:"Employee not found"});
        }  
        res.status(200).json(updatedEmployee);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};

exports.deleteEmployee = async (req, res) => {
    try{
        const {e_id} = req.params;
        const deletedEmployee = await Employee.findByIdAndDelete(e_id);
        if(!deletedEmployee) {
            res.status(404).json({error:"Employee not found"});
        }  
        res.status(200).json({message:"Employee deleted successfully"});
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}