const express = require("express");
const parser = require("body-parser");
const app = express();
app.use(parser.urlencoded({ extended: true }))
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})
app.post("/", function (req, res) {
    var weight = parseFloat(req.body.weight)
    var height = parseFloat(req.body.height)
    var bmi = weight / Math.pow(height, 2)
    res.send(`Your BMI is :${bmi}`)
})
app.listen(3000, function () {
    console.log("server is running");
})