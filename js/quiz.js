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
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
// will need to be hidden until an answer is chosen
var answer = document.querySelector("#answer");
// shows highscores, will be hidden until viewHighscores button is pushed
var highScores = document.querySelector("#highScores");
// let button bring you back to welcome message
var back = document.querySelector("#back");
var initiateGame = document.querySelector("#initiateGame");
var logScore = document.querySelector("#logScore");

var correctAnswers = 0;

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
            // make quiz visible
            welcome.setAttribute("style", "display: none");
            // this is set to display: none in the css page...how do I override that?
            quiz.setAttribute("style", "display: visible");
        } else {
            // hide quiz and prompt initials for highscore storage
            quiz.setAttribute("style", "display: none");
            logScore.setAttribute("style", "display: visible");
        }
    }, 1000);
    // loop through questions
    for (var i = 0; i < questions.length; i++) {
        question.textContent = questions[i];
        choice1.textContent = questions[i].choices[0];
        choice2.textContent = questions[i].choices[1];
        choice3.textContent = questions[i].choices[2];
        choice4.textContent = questions[i].choices[3];
        // check answers
    // need to add an event listener
    if (question[i].answer === EVENTLISTENER) {
        correctAnswer++;
        answer.setAttribute("style", "display: visible");
        answer.textContent = "correct";
    } else {
        timeLeft -=5;
        answer.setAttribute("style", "display: visible");
        answer.textContent = "incorrect";
    }
    }
    answer.textContent = "";
    answer.setAttribute("style", "display: none");
    // need to clearInterval under a few conditions
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