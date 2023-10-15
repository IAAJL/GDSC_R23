let conn = require('./connect')
let collectname = 'users'
let dbname = 'gdsc_r23'
async function insert(){
    let client = await conn.getconnection();
    let db = client.db(dbname)
    console.log("connected to db")
    let collection = db.collection(collectname);
    console.log("Entered collection");
    query={}
    query.name ="hej"
    await collection.insertOne(query).catch((error)=>{
        console.log("Couldn't insert")
    });
    

    await client.close();
    //res.send("Done");
}
async function deleteall(){
    let client = await conn.getconnection();
    let db = client.db(dbname)
    console.log("connected to db")
    let collection = db.collection(collectname);
    console.log("Entered collection");

    await collection.deleteMany()

    client.close()
}
// conn.test();
deleteall()
// module.export = {connectdb};