const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Middlewares

app.use("/posts", ()=>{
    console.log("this is a middleware running")
})

//ROUTES

app.get("/",(req,res)=>{
    res.send("we are on home");
});

app.get("/posts",(req,res)=>{
    res.send("we are on posts");
});

//Connect to DB
mongoose.connect("mongodb+srv://daniele:daniele123@rest.janhu.mongodb.net/Rest?retryWrites=true&w=majority", ()=>{
    console.log("Connected to DB");
})

//listen to the server
app.listen(2500);