var express = require('express');
var app = express();
var books = require("./Routes/books");
var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}))

app.set('view engine','ejs')

app.get("/",function(req,res){
    res.render("Home");
})


app.use("/books",books);

app.listen(8600,function(req,res){

    console.log("Server has started..")
})