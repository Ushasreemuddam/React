var express=require("express");
var cors=require("cors");
var mongoclient=require("mongodb").MongoClient;
var app=express();
app.get("/",(request,response)=>{
    response.send("<h2>API Home</h2>")
});
app.get("/products",(request,response)=>{
    response.send([{Name:"TV",Price:66300.00},{Name:"Mobile",Price:66300.00}])
});
app.get("/categories",(req,res)=>{
    res.send(`
        <categories>
        <category>
        <Id>1</Id>
        <Name>Electronics</Name>
        </category>
        </categories>
    `)
});
app.get("/details/:id/:name",(req,res)=>{
    res.send(`
    Id:${req.params.id}<br>
    Name:${req.params.name}
    `)
});
app.get("*",(request,response)=>{
    response.send("Requested PAth Not Found....")
});
app.listen(5000);
console.log('Server Started:http://127.0.0.1:5000');