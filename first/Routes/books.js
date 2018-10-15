var express = require('express')
var app = express()

app.get("/",function(req,res){
    res.send("Hello world! :)")
})

app.listen(8600,function(req,res){

    console.log("Server has started..")
})