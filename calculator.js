const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port , function ()
{
  console.log("Server is up and running on port 3000");
});

// CALCULATE TWO NUMBERS
app.get("/" , function(req , res)
{
  res.sendFile(__dirname + "/index.html");
});

app.post ("/" , function (req , res)
{
  var number1 = Number(req.body.num1);
  var number2 = Number(req.body.num2);
  var result = number1 + number2;
  res.send("The result is: " +result);
});

 // BMI CALCULATOR
app.get("/bmicalculator", function(req , res)
{
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator" , function(req , res)
{
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height*height);

  res.send("Your BMI is: " + bmi);
});
