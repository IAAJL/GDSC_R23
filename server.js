let express = require('express');
let app = express()

let path = require('path')

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.get('/register',(req,res)=>{
    let options ={
        root: path.join(__dirname+"/views")
    }
    const filename = "success.html"
    console.log(options.root)
    res.sendFile(filename,options,(err)=>{
        //next()
    })
})


const server = app.listen(8000,()=>{
    console.log("server running in port "+server.address().port)
})