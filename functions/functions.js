let conn = require('./connect')
let collectname = 'users'
let dbname = 'gdsc_r23'
async function insert(){
    try{
    let client = await conn.getconnection();
    }
    catch{
        console.log("Connection failed")
        return
    }
    let db = client.db(dbname)
    console.log("connected to db")
    let collection = db.collection(collectname);
    console.log("Entered collection");
    query={}
    query.name ="hej"
    let output = await collection.find(query).toArray();
    if(output.length>0){
        console.log("Already inserted")
        client.close();
        return;
    }
    await collection.insertOne(query).catch((error)=>{
        console.log("Couldn't insert")
    });
    

    await client.close();
    //res.send("Done");
}
async function deleteall(){
    try{
    let client = await conn.getconnection();
    }
    catch{
        console.log("Connection failed")
        return
    }
    let db = client.db(dbname)
    console.log("connected to db")
    let collection = db.collection(collectname);
    console.log("Entered collection");

    await collection.deleteMany()

    client.close()
}
// conn.test();
insert()
// module.export = {connectdb};uuu