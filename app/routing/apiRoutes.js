var users = require("../data/friends.js")


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(users);

    });

    app.post("/api/friends", function (req, res) {
        newUser = req.body;
        users.push(newUser);
        return res.json(newUser);

    });

}