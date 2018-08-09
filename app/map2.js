var newUser = {
    name: "Meg",
    scores: [5, 7, 5]
};


var users = [{
        name: "Dan",
        scores: [2, 3, 2]
    },
    {
        name: "Ed",
        scores: [8, 4, 2]
    },
    {
        name: "G",
        scores: [1, 1, 1]
    },
    {
        name: "angela",
        scores: [9, 9, 9]
    }

];

var result = null;
var winner = null;

function theBigCompare() {
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

theBigCompare();
console.log(result);
console.log(winner);