// const mongodb = require('mongodb');
// const mongoClient = mongodb.MongoClient;

// let objectId = mongodb.ObjectId;

const mongse =require('mongoose')

let database;

async function getDataBase(){
    //correct MOngoDB connection string
    // const client = await mongoClient.connect('mongodb://127.0.0.1:27017');

    // database = client.db('t1');
    // if(database){
    //     console.log('Database connected successfully');
    // }
    // else{
    //     console.log('database connection fail');
    // }
    // return database;


    const client = await mongse.connect('mongodb://127.0.0.1:27017/t1')
    .then(()=>{
        console.log("db connected....")
    })
    .catch(()=>{
        console.log("db erore ...")
    })
}

module.exports = {getDataBase};

// module.exports = {getDataBase,objectId};

