var express=require("express");
var cors=require("cors");
var Mongoclient=require("mongodb").MongoClient;
var constr="mongodb://127.0.0.1:27017";

var app=express();
app.use(cors());  
app.use(express.urlencoded({  //this is used for collecting the binary data and construct into an object
    extended:true
}));
app.use(express.json()); //after that we need to convert into json

app.get("/customers",(req,res)=>{
    Mongoclient.connect(constr)
    .then(obj=>{
        var database=obj.db("tutorial");
        database.collection("customers").find({}).toArray().then(documents=>
            res.send(documents));
            //res.end();
    })
    .catch((err)=>{   
        console.log(err);
    })
});
app.post("/registercustomer",(req,res)=>{
    var customerDetails={
        UserId:req.body.UserId,
        UserName:req.body.UserName,
        Password:req.body.Password,
        Age:req.body.Age,
        Email:req.body.Email,
        Mobile:req.body.Mobile
    };
    Mongoclient.connect(constr)
    .then(obj=>{
        var database=obj.db("tutorial");
        database.collection("customers").insertOne(customerDetails)
        .then(()=>{
            console.log("record Inserted..");
            res.redirect("/customers")
        })
    })
});
app.listen(5000);
console.log('Server Started:http://127.0.0.1:5000')