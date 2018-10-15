var express = require('express')
var app = express()
var books = require("./Routes/books")

app.set('view engine','ejs')

app.get("/",function(req,res){
    res.render("Home");
})


app.use("/books",books);

app.listen(8600,function(req,res){

    console.log("Server has started..")
})