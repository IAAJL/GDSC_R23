let conn = require('./connect')

async function insert(){
    let client = await conn.getconnection();
    let db = client.db('gdsc_r23')
    console.log("connected to db")
    let collection = db.collection('users');
    console.log("Entered collection");
    await client.close();
}
// conn.test();
insert();
// module.export = {connectdb};