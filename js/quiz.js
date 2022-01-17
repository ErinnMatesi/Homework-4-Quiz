/*
 * questions.js is loaded in the HTML before quiz.js
 * It creates a global variable called questions that contains starter questions.
 * Take a look at the structure and familiarize yourself with each part
 * then, add some of your own questions!
 * Use this data to populate your quiz questions, choices, and answers.
 */
console.log(questions);

// will need to become hidden when highscores are being shown
var heading = document.querySelector("#heading");
// needs to change was shows in quiz section to the high scores
var viewHighscores = document.querySelector("#viewHighscores");
// will need to display the setInterval timer
var timerLocation = document.querySelector("#timerLocation");
// what is shown on page load
var welcome = document.querySelector("#welcome");
// will hold the quiz
var quiz = document.querySelector("#quiz");
var question = document.querySelector("#question");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
// will need to be hidden until an answer is chosen
var answer = document.querySelector("#answer");
// shows highscores, will be hidden until viewHighscores button is pushed
var highScores = document.querySelector("#highScores");
// let button bring you back to welcome message
var back = document.querySelector("#back");
var initiateGame = document.querySelector("#initiateGame");
var logScore = document.querySelector("#logScore");

// will need to start interval but also react to incorrect answers
var startTimer;
var timeLeft = 60

// WHY DO THESE NOT WORK IN THE FUNCTIONS BELOW?
var hideWelcome = welcome.setAttribute("style", "display: none");
var hideQuiz = quiz.setAttribute("style", "display: none");
var hideHighScores = highScores.setAttribute("style", "display: none");
var hideLogScore = logScore.setAttribute("style", "display: none");
var hideHeading = heading.setAttribute("style", "display: none");

var showWelcome = welcome.setAttribute("style", "display: visible");
var showQuiz = quiz.setAttribute("style", "display: visible");
var showHighScores = highScores.setAttribute("style", "display: visible");
var showLogScore = logScore.setAttribute("style", "display: visible");
var showHeading = heading.setAttribute("style", "display: visible");

// PLAYING THE GAME
initiateGame.addEventListener("click", function() {
    // will need to start timer
    startTimer = setInterval(function() {
        timerLocation.textContent = "Seconds Left: " + timeLeft;
        if (timeLeft > 0) {
            timeLeft--;
            welcome.setAttribute("style", "display: none");
            // this is set to display: none in the css page...how do I override that?
            quiz.setAttribute("style", "display: visible");
        } else {
            // hide quiz and prompt initials for highscore storage
            quiz.setAttribute("style", "display: none");
            logScore.setAttribute("style", "display: visible");
        }
    }, 1000);
    // make quiz visible, and loop through questions
    // check answers
});


// HIGHSCORE VIEWING
viewHighscores.addEventListener("click", function() {
    // make welcome, quiz and/or logscore hidden
        welcome.setAttribute("style", "display: none");
        quiz.setAttribute("style", "display: none");
        highScores.setAttribute("style", "display: visible");
        logScore.setAttribute("style", "display: none");
    });

back.addEventListener("click", function() {
    welcome.setAttribute("style", "display: visible");
    quiz.setAttribute("style", "display: none");
    highScores.setAttribute("style", "display: none");
    logScore.setAttribute("style", "display: none");
});