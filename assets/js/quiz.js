/*
 * questions.js is loaded in the HTML before quiz.js
 */
console.log(questions);

// contains View Highscores button and timer
var heading = document.querySelector("#heading");
// shows highscores
var viewHighscores = document.querySelector("#viewHighscores");
// displays the setInterval timer
var timerLocation = document.querySelector("#timerLocation");
// what is shown on page load
var welcome = document.querySelector("#welcome");
// section that shows quiz content
var quiz = document.querySelector("#quiz");
var question = document.querySelector("#question");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
// is hidden until an answer is chosen
var answer = document.querySelector("#answer");
// shows highscores, hidden until viewHighscores button is pushed
var highScores = document.querySelector("#highScores");
// this button brings you back to welcome message
var back = document.querySelector("#back");
var initiateGame = document.querySelector("#initiateGame");
var logScore = document.querySelector("#logScore");
var scoreList = document.querySelector("#scoreList");
var score = document.querySelector("#score");
var inputSubmit = document.querySelector("#inputSubmit");
var initials = document.querySelector("#initials");

var index = 0;

var correctAnswers = 0;

var startTimer;
var timeLeft = 50;

// display question and choices based on index
var displayQuestion = function() {
    question.textContent = questions[index].title;
    choice1.textContent = questions[index].choices[0];
    choice2.textContent = questions[index].choices[1];
    choice3.textContent = questions[index].choices[2];
    choice4.textContent = questions[index].choices[3];
    // check answers
    choice1.addEventListener("click", checkAnswer);
    choice2.addEventListener("click", checkAnswer);
    choice3.addEventListener("click", checkAnswer);
    choice4.addEventListener("click", checkAnswer);

    if (index == questions.length-1) {
        clearInterval(startTimer);
        endGame();
    }
};

// compare content of answer to contact of the choice that is clicked
var checkAnswer = function(event) {
    if (questions[index].answer === event.target.textContent) {
        correctAnswers++;
        answer.hidden = false;
        answer.textContent = "correct";
        } else {
        timeLeft -=5;
        answer.hidden = false;
        answer.textContent = "incorrect";
        };
    index++;
    console.log(correctAnswers);
    displayQuestion();
};

var endGame = function() {
    logScore.hidden = false;
    quiz.hidden = true;
    score.textContent = "Score:" + correctAnswers;

    // collect user initials
    inputSubmit.addEventListener("click", function(event) {
        event.preventDefault();
        if (initials.value === "") {
            alert("Initials cannot be blank");
            return;
        };

        // creating an object that holds initials and their score    
        var inputScore = {
        initials: initials.value,
        score: correctAnswers
        };
        var scoreArray = JSON.parse(localStorage.getItem("highScores")) || [];
        // adds the current initials and score to the array
        scoreArray.push(inputScore);

        localStorage.setItem("highScores", JSON.stringify(scoreArray));
        logScore.hidden = true;
        welcome.hidden = false;
        console.log(scoreArray);
        console.log(inputScore);
        location.reload();
    });
    
};

// PLAYING THE GAME
initiateGame.addEventListener("click", function() {
   welcome.hidden = true; 
   quiz.hidden = false;
   highScores.hidden = true;
   logScore.hidden = true;
   // will start timer
    startTimer = setInterval(function() {
        timerLocation.textContent = "Seconds Left: " + timeLeft;
        if (timeLeft > 0) {
            timeLeft--;
            // make quiz visible
            quiz.hidden = false;
        } else {
            // hide quiz and prompt initials for highscore storage
            endGame();
            clearInterval(startTimer);
        };
    }, 1000);
    // loop through questions
    displayQuestion();
    answer.textContent = "";
    answer.hidden = true;
});


// HIGHSCORE VIEWING
viewHighscores.addEventListener("click", function() {
    // make welcome, quiz and/or logscore hidden
    welcome.hidden = true;
    quiz.hidden = true;
    logScore.hidden = true;
    highScores.hidden = false;
    heading.hidden = true;
    console.log("test");
    getScores();
    // scoreList.innerHTML = "";
    // loop through localStorage and create li for each object, append to ol
});

var printHistory = function(history) {
    var scoreItem = document.createElement("li");
    scoreItem.innerText=history.initials + ": " + history.score;

    scoreList.appendChild(scoreItem);
};

var getScores = function () {
    var history = JSON.parse(localStorage.getItem("highScores")) || [];
    console.log(history);
    scoreList.innerHTML="";
    for (var i = 0; i < history.length; i++) {
        printHistory(history[i]);
    }
};

back.addEventListener("click", function() {
    welcome.hidden = false;
    quiz.hidden = true;
    highScores.hidden = true;
    logScore.hidden = true;
    heading.hidden = false;
    console.log("test back");
    location.reload();
});

