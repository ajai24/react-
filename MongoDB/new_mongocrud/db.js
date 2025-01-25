const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const Obj = mongodb.ObjectId;

let database;

async function getDatabase() {
    const client = await mongoClient.connect('mongodb://127.0.0.1:27017');

    database = client.db('react');

    if(database) {
        console.log("Database connected successfully");
    }
    else {
        console.log("Database failed to connect");
    }
    return database;
}

module.exports = {
    getDatabase,
    Obj
}
