var express = require('express');
var router = express.Router();
var mongodb=require('mongodb');
var mongoclient=mongodb.MongoClient;
var url = "mongodb://127.0.0.1:27017/sampledb"

router.get("/View",function(req,res){
    mongoclient.connect(url,function(err,database){
        var db = database.db('sampledb');
        var collection = db.collection('Books');
        collection.find().toArray(function(err,result){
            if(err)
            {
                console.log(err);
            }
            else
            {
                res.render("ViewBooks",{"data":result});
                console.log(result);
            }
        })

    });
})

module.exports = router;

