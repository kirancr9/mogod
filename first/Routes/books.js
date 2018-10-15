var express = require('express')
var app = express()
var mongodb=require('mongodb');
var mongoclient=mongodb.MongoClient;
var url = "mongodb://127.0.0.1:27017/sampledb"

router.get("book/view",function(req,res){
    mongoclient.connect(url,function(err,database){
        var db = database('sampledb');
        var collection = db.collection('Books');
        collection.find().toArray(function(err,result){
            if(err)
            {
                console.log(err);
            }
            else
            {
                res.render("viewBooks",{"data":result})
                console.log(result);
            }
        })

    });
})



app.listen(8600,function(req,res){

    console.log("Server has started..")
})