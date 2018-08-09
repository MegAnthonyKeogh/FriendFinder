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

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(3000);
console.log("listening to PORT"+ PORT);