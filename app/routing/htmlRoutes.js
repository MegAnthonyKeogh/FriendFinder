var path = require("path");
var users = require("../data/friends.js")
var newUser = null;
var result = null;
var winner = null;
var winnerImg = null;


function theBigCompare(newUser) {
  for (i = 0; i < users.length; i++) {
    var newarray = newUser.scores.map(function (item, index) {

      if (item > users[i].scores[index]) {

        return item - users[i].scores[index];

      } else {
        return users[i].scores[index] - item;
      }
    })
    console.log(newarray);

    var sum = null;

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    sum = newarray.reduce(reducer);
    console.log("sum = " + sum);

    if (result === null) {
      result = sum;
      winner = users[i];
      console.log("first match is " + users[i].name + " with a sum of " + sum);

    } else if (result > sum) {
      result = sum;
      winner = users[i];
      winnerImg = users[i].photo
      console.log("new match" + users[i].name + "with a sum of " + sum);

    } else if (result < sum) {

      console.log("do nothing");

    } else {
      console.log("not a better match, " + users[i].name + "is still the better match " + result);
    }
  }
  console.log("from htmlRoutes.js" + result);
  console.log(winner);
  console.log(winnerImg);
}

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.post("/survey", function (req, res) {
    newUser = req.body;
    theBigCompare(newUser);
    //res.json(winner);

    return res.json(winner);

  });

  // If no matching route is found default to home
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  })

}