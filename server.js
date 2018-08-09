var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
//var userArray = require('./app/data/friends.js');
 
var app = express();
var PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json());

var userArray = [{
  name: "Megan",
  photo: "pic",
  scores: [
      Q1 = "",
      Q2 = "",
      Q3 = "",
      Q4 = "",
      Q5 = "",
      Q6 = "",
      Q7 = "",
      Q8 = "",
      Q9 = "",
      Q10 = ""
  ]
}];


//require("./routes/apiRoutes")(app);
// require("../routes/htmlRoutes")(app);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});


app.get("/api/friends/", function (req, res){
  return res.json(userArray);
  
});

app.post("/api/friends/", function (req, res) {
  var newUser = req.body;
  userArray.push(newUser);
   return res.json(newUser);
});

// If no matching route is found default to home
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
});


app.listen(3000);
console.log("listening to PORT"+ PORT);