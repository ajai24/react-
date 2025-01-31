import React,{useState,useEffect} from 'react';
import {  fetchEmployees } from '../api/employeeApi';
import { createEmployee } from '../api/employeeApi';
import { editEmployee } from '../api/employeeApi';
import { deleteEmployee } from '../api/employeeApi';



const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [empid, setEmpId] = useState("");
    const [empName, setEmpName] = useState("");
    const [editingEmployee, setEditingEmployee] = useState("");
    

    useEffect(() => {
        const loadEmployees = async () => {
            const{data}=await fetchEmployees();
            setEmployees(data);
            console.log(data);
        };
        loadEmployees();
    }, []);


    const insertEmployee = async () => {
        const newEmployee={empid,empName};
        const {data}=await createEmployee(newEmployee);
        setEmployees([...employees,data]);
        setEmpId("");
        setEmpName("");
    };

    const EditEmployee = (emp) => {
        setEditingEmployee(emp);
        setEmpId(emp.empid);
        setEmpName(emp.empName);
    };

    const updateEmployee = async () => {
        const updatedEmployee = {empid,empName};
        const {data} = await editEmployee(editingEmployee._id, updatedEmployee);
        setEmployees(employees.map((emp) => (emp._id === editingEmployee._id ? data : emp)));
        setEmpId("");
        setEmpName("");
        setEditingEmployee(null);
    }

    const handleDeleteEmployee = async (id) => {
        await deleteEmployee(id);
        setEmployees(employees.filter((emp) => emp._id !== id));
      };
    
    return (
        <div>
            {
            editingEmployee ?
            ( <div>
                <h1>Edit Employeee</h1>
            <input type="text" placeholder="Employee Id" value={empid} onChange={(e) => setEmpId(e.target.value)} />

            <input type="text" placeholder="Employee Name" value={empName} onChange={(e) => setEmpName(e.target.value)} />

            <button onClick={updateEmployee}>Save</button>
            </div>):



            (<div>
                <h1>Add Employee</h1>
            <input type="text" placeholder="Employee Id"  onChange={(e) => setEmpId(e.target.value)} />

            <input type="text" placeholder="Employee Name"  onChange={(e) => setEmpName(e.target.value)} />

            <button onClick={insertEmployee}>Add Employee</button>
            </div>)}

            <h2>Employee List</h2>
            <ul>
                {
                employees.map((emp) => (
                    <li key={emp._id}>
                        {emp.empid} - {emp.empName} {" "}
                        <button onClick={() => EditEmployee(emp)}>Edit</button>
                        <button onClick={() => handleDeleteEmployee(emp._id)}>Delete</button>

</li>
                ))
                }
            </ul>
            </div>
    );
};

export default EmployeeList;