let express = require('express');
let app = express()

app.get('/',(req,res)=>{
    res.send("Hello")
})

const server = app.listen(8000,()=>{
    console.log("server running in port "+server.address().port)
})