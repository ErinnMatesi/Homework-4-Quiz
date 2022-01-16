/*
 * questions.js is loaded in the HTML before quiz.js
 * It creates a global variable called questions that contains starter questions.
 * Take a look at the structure and familiarize yourself with each part
 * then, add some of your own questions!
 * Use this data to populate your quiz questions, choices, and answers.
 */
console.log(questions);

// will need to become hidden when highscores are being shown
var heading = document.querySelector("heading");
// needs to change was shows in quiz section to the high scores
var viewHighscores = document.querySelector("viewHighscores");
// will need to display the setInterval timer
var timerLocation = document.querySelector("timerLocation");
// what is shown on page load
var welcome = document.querySelector("welcome");
// will hold the quiz
var quiz = document.querySelector("quiz");
var question = document.querySelector("question");
var button1 = document.querySelector("button1");
var button2 = document.querySelector("button2");
var button3 = document.querySelector("button3");
var button4 = document.querySelector("button4");
// will need to be hidden until an answer is chosen
var answer = document.querySelector("answer");
// shows highscores, will be hidden until viewHighscores button is pushed
var highScores = document.querySelector("highScores");


