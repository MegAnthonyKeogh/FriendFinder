var newUser = [3, 4, 5];

var usersArray = [{
        "arrA": {
            name: "Meg",
            scores: [5, 7, 5, ]
        }
    },
    {
        "arrB": {
            name: "Ed",
            scores: [8, 4, 2]
        }
    },
    {
        "arrC": {
            name: "Dan",
            scores: [2, 3, 2]
        }
    },
    {
        "arrD": {
            name: "G",
            scores: [1, 1, 1]
        }
    },
    {
        "arrE": {
            name: "angela",
            scores: [9, 9, 9]
        }
    },
    {
        "arrF": {
            name: "fluffy",
            scores: [8, 8, 8]
        }
    }

]

usersArray.push(newUser);
console.log(usersArray.scores);

function theBigCompare() {
     for (i = 0; i < usersArray.length; i++)

        var diffArr = newUser.map(function (item, usersArray) {
            if (item.scores > usersArray[i].scores.map()) {

                return item.scores - usersArray[i].scores.map();

            } else {
                return usersArray[i].scores.map() - item.scores;
            }
        })
    };
    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    // 3 + 3 + 3 =9 diffArr = 9
    console.log("diff Arr = " + diffArr.reduce(reducer));


theBigCompare();

///////////////////////////////

