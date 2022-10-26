const express = require("express")
const request = require("request")
const bodyParser= require("body-parser")

const app = express()


app.get("/", function(req, res){
    res.send("Hello")
})

app.listen(3000, function(req, res){
    console.log("Server Up and Running at port 3000")
})