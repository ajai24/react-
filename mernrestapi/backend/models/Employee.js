const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    empid:Number,
    empName:String
});

module.exports = mongoose.model("Employee", employeeSchema);
