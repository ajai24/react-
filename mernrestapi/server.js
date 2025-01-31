const express=require('express');
const bodyParser=require('body-parser');
const dotenv=require('dotenv');
const connectDB=require('./backend/configs/db');
const employeeRoutes=require('./backend/routes/employee');  
const cors = require('cors');

dotenv.config();

connectDB();    

const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/employees',employeeRoutes);

const PORT=process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

