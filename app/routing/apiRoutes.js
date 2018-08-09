var users = require("../data/friends.js")
var newUser = null;
var result = null;
var winner = null;

function theBigCompare(newUser) {
    for (i = 0; i < users.length; i++) {
        var newarray = Number(newUser.scores).map(function (item, index) {

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
            console.log("first match is " + users[i].name + " with a sum of " + sum);

        } else if (result > sum) {
            result = sum;
            winner = users[i];
            console.log("new match" + users[i].name + "with a sum of " + sum);

        } else if (result < sum) {

            console.log("do nothing");

        } else {
            console.log("not a better match, " + users[i].name + "is still the better match " + result);
        }
    }
}

console.log(result);
console.log(winner);

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(users);

    });

    app.post("/api/friends", function (req, res) {
        newUser = req.body;
        theBigCompare();
        //users.push(newUser);
        return res.json(newUser);

    });
}