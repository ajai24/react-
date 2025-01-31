import axios from 'axios';
const API_URL = 'http://localhost:5000/api/employees';


export const fetchEmployees = async () => {
    try{
    const response = await axios.get(API_URL);
    console.log("response", response);
    return response;
}

catch(error){
    console.error("Error fetching employees",error);
    throw error;
}
};


export const createEmployee = async (employeeData) => {
    try{
        const response = await axios.post(API_URL,employeeData);
        console.log("response",response);
        return response;
    }
    catch(error){
        console.error("Error creating employee",error);
        throw error;
    }
};

export const editEmployee = async (id,employeeData) => { 
    try{
        const response = await axios.put(`${API_URL}/${id}`,employeeData);
        console.log("response",response);
        return response;
    }
    catch(error){
        console.error("Error editing employee",error);
        throw error;
    }
}

export const deleteEmployee = async (id) => {
    try {
      const response = await axios.delete(${API_URL}/${id});
      return response;
    } catch (err) {
      console.error("Error deleting employee:", err);
      throw err;
    }
  };
  