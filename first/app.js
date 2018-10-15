var express = require('express')
var app = express()

app.set('')

app.get("/",function(req,res){
    res.render("Home");
})

app.listen(8600,function(req,res){

    console.log("Server has started..")
})