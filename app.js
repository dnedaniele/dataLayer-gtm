const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

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
mongoose.connect(
    process.env.DB_CONNECTION,
{ useNewUrlParser: true },
 ()=>{
    console.log("Connected to DB");
})

//listen to the server
app.listen(2500);