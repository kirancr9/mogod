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
            
            }
        })

    });
})

router.get("/New",function(req,res){

    res.render("NewBook")
})

router.post("/New",function(req,res){
    mongoclient.connect(url,function(err,database){
        var db = database.db("sampledb");
        var collection = db.collection('Books');
        var BookData = {"BookID":req.body.bid, "BookName":req.body.bname, "Author":req.body.bauth, "Price":req.body.bpr, "Publisher":req.body.bpub}
        collection.insert(BookData,function(err,database){
            if(err){
                console.log("error");

            }
            else{
                console.log("New Book Added");
                res.redirect("/");
            }
        })
    })
})



router.get("/Del", function (req, res) {

    mongoclient.connect(url, function (err, database) {
        var db = database.db("sampledb");
        var collection = db.collection("Books");
        collection.find({},{"BookID":1,"_id":0}).toArray(function (err, result) {

            if (err) {
                console.log(err);
            }
            else {
                console.log(result);
                
                res.render("DelBook",{"data":result});
            }
        })

    });
})

router.post("/Deleted", function (req, res) {

    mongoclient.connect(url, function (err, database) {
        var db = database.db("sampledb");
        var collection = db.collection("Books");
        var bookID= req.body.sel;
        console.log(bookID);
        collection.remove({"BookID":bookID},function(err,result){

            console.log("Book deleted")
            res.redirect("/");
        })



    });
})


module.exports = router;

