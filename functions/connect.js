let {MongoClient} = require('mongodb')

let url = 'mongodb://127.0.0.1:27017/';

let dbName = 'gdsc_r23';

async function getconnection(){
    client = new MongoClient(url);
    await client.connect();
    return client;
}
function test(){
    console.log("test")
}

module.exports = {getconnection,test}