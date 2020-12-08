const express = require("express");
const app = expresse();

//ROUTES
app.get("/", (req, res) => {
  res.send("WE ARE ON HOME");
});

//Listen to the Server
app.listen(3000);
