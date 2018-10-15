var express = require('express')
var app = express()

app.set('view engine','ejs')

app.get("/",function(req,res){
    res.render("Home");
})

app.use("/book")

app.listen(8600,function(req,res){

    console.log("Server has started..")
})