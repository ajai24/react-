const express = require("express");
const app = express();
const exhbs = require("express-handlebars");
const bodyParser = require("body-parser");
const dbo = require("./db");
const obj_id = dbo.Obj


app.engine("hbs",
    exhbs.engine({
        layoutsDir:'viewsfold/',
        defaultLayout:'maincopy',
        extname:'hbs'
    })
);

app.set("view engine", "hbs");
app.set("views", "viewsfold");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    let stu_id,edit_stu;

    let database = await dbo.getDatabase();
    const collection = database.collection("student");

    const cursur = collection.find({});
    let datas = await cursur.toArray()

    let message = "";
    if(req.query.status === '1') {
        message = "Data inserted successfully"
    }
    else if(req.query.status === '2') {
        message = "Data updated successfully"
    }
    else if(req.query.status === '3') {
        message = "Data deleted successfully"
    }

    if(req.query.edit_id) {
        stu_id = req.query.edit_id;
        edit_stu = await collection.findOne({ _id: new obj_id(stu_id) });
    }
    if(req.query.delete_id) {
        stu_id = req.query.delete_id;
        await collection.deleteOne({ _id: new obj_id(stu_id) });
        res.redirect("/?status=3");
    }
    console.log('The message',message);
    console.log('The data',datas);
    res.render("maincopy", { message ,datas,edit_stu,stu_id});    
});

app.post("/form", async (req, res) => {
    let database = await dbo.getDatabase();
    const collection = database.collection("student");
    const data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
    };
    await collection.insertOne(data);
    res.redirect("/?status=1");
})

app.post("/update/:_id", async (req, res) => {
    let database = await dbo.getDatabase();
    let stu_id = req.params._id;
    const collection = database.collection("student");
    const data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
    };
    await collection.updateOne({ _id: new obj_id(stu_id) }, { $set: data });
    res.redirect("/?status=2");
})


app.listen(9000, () => {
    console.log("Server is running on port 9000");
});

