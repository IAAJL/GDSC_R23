let express = require('express');
let app = express()

app.use(express.static('views'));

let path = require('path')

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.get('/register',(req,res)=>{
    let options ={
        root: path.join(__dirname+"/views")
    }
    const filename = "first.html"
    console.log(options.root)
    res.sendFile(filename,options,(err)=>{
        //next()
    })
})

app.get('/register2',(req,res)=>{
    let options ={
        root: path.join(__dirname+"/views")
    }
    const filename = "second.html"
    console.log(options.root)
    res.sendFile(filename,options,(err)=>{
        //next()
    })
})


const server = app.listen(8000,()=>{
    console.log("server running in port "+server.address().port)
})