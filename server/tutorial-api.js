var express=require("express");
var mongoclient=require("mongodb").MongoClient;
var cors= require("cors");

var url="mongodb://127.0.0.1:27017";

var app=express();

app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/videos",(req,res)=>{
    mongoclient.connect(url).then((clientObject)=>{
        var database=clientObject.db("tutorial");
        database.collection("videolibrary").find({}).toArray().then((documents)=>{
            res.send(documents)
        })
    })
});

app.get("/videos/:id",(req,res)=>{
    var video_id=parseInt(req.params.id)
    mongoclient.connect(url).then((clientObject)=>{
        var database=clientObject.db("tutorial");
        database.collection("videolibrary").find({id:video_id}).toArray().then((documents)=>{
            res.send(documents)
        })
    })
});

app.post("/addvideo",(req,res)=>{
    var video={
        "id":parseInt(req.body.id),
        "title":req.body.title,
        "url":req.body.url,
        "views":parseInt(req.body.views),
        "likes":parseInt(req.body.likes),
        "subscribed":req.body.subscribed
    }
    mongoclient.connect(url).then(clientObject=>{
        var database=clientObject.db("tutorial");
        database.collection("videolibrary").insertOne(video).then((result)=>{
            console.log("video Inserted");
            res.redirect("/videos");
        })
    })
});

app.put("/updatevideo/:id",(req,res)=>{
    var video_id=parseInt(req.params.id);
    var video={
        "title":req.body.title,
        "url":req.body.url,
        "views":parseInt(req.body.views),
        "likes":parseInt(req.body.likes),
        "subscribed":req.body.subscribed
    }
    
    mongoclient.connect(url).then((clientObject)=>{
        var database=clientObject.db("tutorial");
        database.collection("videolibrary").updateOne({id:video_id},{$set:video}).then((result)=>{
            console.log(`Video Updated`);
            res.redirect("/videos")
        })
    })
});

app.delete("/deletevideo/:id",(req,res)=>{
    var video_id=parseInt(req.params.id)
    mongoclient.connect(url).then((clientObject)=>{
        var database=clientObject.db("tutorial");
        database.collection("videolibrary").deleteOne({id:video_id}).then((result)=>{
            console.log(`Video deleted`);
            res.redirect("/videos")
        })
    })
});

app.listen(5566);
console.log(`server started:http://127.0.0.1:5566`)