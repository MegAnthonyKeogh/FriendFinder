
# FriendFinder
[Try the application here](https://glacial-eyrie-34031.herokuapp.com/survey).
FriendFinder matches the user with a potential 'friend' based on how similarly they score on the survey. The friend with the closest value to the user will be the winning match. The user will see the recommendation pop onto the screen with the use of a bootstrap's modal.  

### Getting Started
To begin, I would recommend creating a 10 questions survey (and each question must be a scale from 1 to 5(1 being least likely, 5 being most likely). The only requirement is that each question as a scale of numeric choices. The questions must have a uniform feel with the way the user is inputting the data. This makes it easier for us to create the logic behind the applications recommendation. Open-ended questions, text answers or any other question form that does not fit the numeric scale format will skew the results or will stop the application from finishing the program and pairing the user with a new friend. 

I used bootstrap's form to quickly create my questions with a correspondng numeric scale(from 1-5), and a submit button on my survey.html file. 

### Prerequisites
This project utilizes Node.js, Express, and Body-Parser. You need to have Node.js installed on your computer before building this application. If you do not have Node.js already installed on your machine, you can use this [link](https://nodejs.org/en/). Once you have node.js you'll be able to start building your own friend finding application. 


### Installing
Once you're in your file that will hold your application, install your npm packages. You can build your folder from command line with `mkdir` function followed by the name of your folder. For example: `mkdir friendFinder` will create a folder called, "friendFinder". 
Next from terminal, move into the file with this command from terminal: `cd friendFinder`. 

Now that your are in your file. create the files you new to run this application. The `touch` command will create your file. 
Next, create your server.js file. This is file that will run and connect all of the pieces of this project to create a working application. You will have all of your routes and corresponding files and logic connected to this page to create this program. 

After you `touch server.js` make your app directory with the command `mkdir app`. Enter this fold with `cd app`. Now that you are in this file, repeat the earlier commands until you have a file/folder system that looks like the image below. all of your other files will be in your app directory. To move out of a file use the command `cd ../`, and to move out of two folders try `cd ../../`.

![file structure](filestructure.png)

At this point, you should create your package.json file with the command `npm init`. This will give you create for creating this project and it will also continuously add your npm packages to it. This will help anyone looking to fork your project and recreate it. 
When you run the `npm init` command from command line, you will be ask a series of questions such as Project Name, the version of it, the repo, and the author. It's pretty self explanatory and easy to follow. 

Now you'll want to install your npm packages and finish setting up your environment. 
The two packages are express, and body-parser. User the commands `npm install express` and `npm install body-parser` respectively to add these packages to your folder. 

What do these do? Express allows you to build routes for your website. So any file you want to host on your server and whatever route you specify like "/", or  "/api", that hang off the domain are created by express. For more information on express.js, see the npm information [here](https://www.npmjs.com/package/express).

Body-parser allows us to send and recieve JSON objects to and from the server. For more information on this package, look [here](https://www.npmjs.com/package/body-parser).

### Building the application
Your environment is all set and ready to go! If you have not, build out your home.html and survey.html pages. I used [Bootstrap 4](https://getbootstrap.com/) to build my site. Remember to use the jQuery and other links from Bootstrap so that all button presses or animated function will work appropriately. 

Next in your friend.js file, you will want to build out 3 friends with their names, a link to a photo of them, and an array of scores (all different). This dummy text is to test whether or not your logic is working correctly. 

I created an array name users and in it I have 3 objects. The array in each object has the same number of questions as in the survey. Remember to `module.exports = users;` at the bottom of this file so that you can use this information in another file on your site. 

Now the fun begins! 
Next, you'll want to go back to your survey.html file. Here we are going to create an "on click" event that will take the users data, turn it into an object and compare it against the other users in our array. I used jQuery to run my on click function. Remember to have a link to jQuery's CDN. 

Below your HTML and CSS for the page include `<script> logic goes here </script>` tags. This is your 'on click' event and it will turn the information from the user into an object. The object is the newUser. The `$("#submit")` ties the function to the submit button by using jQuery to connect to the button via the button's id. The newUser object has 3 key value pairs. The name of the user, the user's picture and an array of scores from the survey. Here is the code below:

`      $("#submit").on("click", function (event) {
            event.preventDefault();
            var newUser = {
                name: $("#name").val().trim(),
                photo: $("#pic").val().trim(),
                scores: [
                    parseInt($("#Q1").val()),
                    parseInt($("#Q2").val()),
                    parseInt($("#Q3").val()),
                    parseInt($("#Q4").val()),
                    parseInt($("#Q5").val()),
                    parseInt($("#Q6").val()),
                    parseInt($("#Q7").val()),
                    parseInt($("#Q8").val()),
                    parseInt($("#Q9").val()),
                    parseInt($("#Q10").val())
                ]
            }`
            
  The next step is to send that information to be compared against the other users in the array. 
  beneath that code use this function: 
  
  `   $.post("/survey", newUser)
                .done(function (winner) {
                    $("#title").text("You matched with " + winner.name);
                    $("#photo").attr("src", winner.photo);
                    $("#photo").html("<img src=" + winner.photo + " width='400px'>")
                    $("#myModal").modal("toggle");


                    //alert("you matched with " + winner.name + winner.photo);
                });`
  `
  This code sends the infomration to the /survey route as an object named, "newUser".
  
  Disregard the `.done` promise right now. It's not being used yet. 
  Now, look at htmlRoutes.js. Look at this route:
  `  app.post("/survey", function (req, res) {
    newUser = req.body;
    theBigCompare(newUser);
    //res.json(winner);

    return res.json(winner);

  });`
  
  This post takes the newUser object and passes it into a function called, "theBigCompare". The res (result) from that function is shared on the /survey page. 
  
  If you look towards the top of the htmlRoutes.js file you will see the bigCompare function and the global variables associated with it. Here is the code below:
  `var users = require("../data/friends.js")
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
  }`
  
  The first step I did was require the array of users already in the system by connecting the data in the variable users.
  Next, I set some global variables I need for my logic. Those are the newUser, result, and winner. Next the function begins.  By passing in the newUser, I'm going to compare the scores from all of the users against the score of the newUser. By using the map function, I'm comparing each score from the survey between the users. My if/else statement allows me to compare each score without getting negative numbers. 
  
  Next I push this newarray variable(which is an array of numbers that is the difference between the newUser and the current user) and use the reduce function to get the sum total of the new array. 
  
  Finally, I use if else statements to compare all of the new reduced numbers to find the smallest number. The smallest number is the user that answer the most like the newUser and thus is the match. 


Versioning
This is the first version of this project.

Author
Megan Anthony


License
This project is unlicensed .

Acknowledgments
Thank you to Ed Brennan for walking me through the logic to build this application.
