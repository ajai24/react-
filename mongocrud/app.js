const express = require("express");
const app = express();
const exhbs = require("express-handlebars");
const bodyParcel = require('body-parser');
const dbo = require('./db');
const objid = dbo.objectId
const empmodel=require('./models/empModel')


//configure handlebars
app.engine("hbs",
    exhbs.engine({
        layoutsDir:'viewsfold/',
        defaultLayout:'maincopy',
        extname:'hbs',
   
      runtimeOptions:{
        allowProtoPropertiesByDefault:true,
        allowprotoMethodsByDefault:true
    }
})  
);

app.set("view engine", "hbs");
app.set("views", "viewsfold");
app.use(bodyParcel.urlencoded(({extended:true})));

//routes
app.get("/", async (req, res) => {    

    let edit_id,edit_emp
    // let database = await dbo.getDataBase();
    // const collection = database.collection('emp')
    // const cursor = collection.find({})  // find() return the cursor object
//  //  await collection.insertOne({name : 'ajay kannan', roll : 7})
    // let datas =await cursor.toArray()

    let datas=await empmodel.find()
    let message ='';

    if(req.query.edit_idd)
    {
        edit_id=req.query.edit_idd
        // edit_emp=await collection.findOne({_id:new objid(edit_id)})
        edit_emp=await empmodel.findOne({_id:edit_id})
    }

    if(req.query.delete_idd){
        delete_id=req.query.delete_idd
        console.log('Delete request for id:',delete_id);
        // await collection.deleteOne({_id:new objid(delete_id)})
        await empmodel.deleteOne({_id:delete_id})
        res.redirect('/?status=3');
    }

    if(req.query.status === '1')
    {
    message='Inserted Sucessfully';
    }
    else if(req.query.status === '2'){
        message='Updated Sucessfully';
    }
    else if(req.query.status === '3'){
        message='Deleted Sucessfully';
    }

    res.render("maincopy", { message,datas,edit_id,edit_emp});    
});

app.post('/empinfo',async(req,res)=>{

    // const database = await dbo.getDataBase();
    // const collection = database.collection('emp');
    const employee = {empid:req.body.eid,empname:req.body.ename};
    const newempDoc=new empmodel(employee)
    newempDoc.save()
    // await collection.insertOne(employee);

    res.redirect('/?status=1');
});

app.post('/updateinfo/:e_id',async (req,res) => {
    // const database = await dbo.getDataBase();
    // const collection = database.collection('emp');
    const employee = {empid:req.body.eid,empname:req.body.ename};
    let ed_idd=req.params.e_id
    // await collection.updateOne({_id:new objid(ed_idd)},{$set:employee});
    await empmodel.findOneAndUpdate({_id:ed_idd},employee)
    res.redirect('/?status=2');



})

//start the server
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
