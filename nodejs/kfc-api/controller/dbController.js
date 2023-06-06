let mongo = require('mongodb');
let {MongoClient} = require('mongodb');
let mongoUrl = "mongodb://localhost:27017"
// let mongoUrl = "mongodb+srv://vicky_03:2gBDRqpEelizHMgw@kfc.uh3mvos.mongodb.net/?retryWrites=true&w=majority"

let client = new MongoClient(mongoUrl)

async function dbConnect(){
    await client.connect()
}

let db = client.db('kfcApi');

async function  getData(colName,query){
    let output = [];
    try{
        const cursor = db.collection(colName).find(query);
        for await(const data of cursor){
            output.push(data)
        }
        cursor.closed
    }catch(err){
        output.push({"Error":"Error in getData"})
    }
    return output
}

async function postData(colName,data){
    let output;
    try{
        output = await db.collection(colName).insertOne(data)
    }
    catch(err){
         output = {"response":"Error in postData"}
    }
    return output

}

module.exports = {
    dbConnect,
    getData,
    postData
}