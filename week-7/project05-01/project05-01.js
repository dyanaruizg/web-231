"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Diana Ruiz Garcia
      Date: 02/22/2024

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
let timeID;
const questionList = document.querySelectorAll("div#quiz input");

// Show the quiz and start the clock counts down the time 
// remaining every second when the Start Quiz button is clicked
startQuiz.onclick = function() {
  overlay.className = "showquiz";
  timeID = window.setInterval(countdown, 1000);
}

// Function to update the quiz clock
function countdown() {
  // Verify that the value of the time left is equal to zero
  // If that condition is true, check the answers
  if (timeLeft == 0) {
    window.clearInterval(timeID); // Cancel the timed command
    let totalCorrect = checkAnswers(); // Variable that obtains the total of correct answers
    // Verify that the total number of correct answers is equal to the total number of questions
    // If that condition is true, a congratulatory message is given
    if (totalCorrect == correctAnswers.length) {
      window.alert("Congratulating the student on getting 100%!");
    } else {
      // If that condition is false, the quiz catches your mistakes 
      // and reports the number of correct answers out of the total number of questions
      window.alert("Incorrect answers: " + totalCorrect + " - Total questions: " + correctAnswers.length);
      timeLeft = quizTime; // Resets the time left to the quiz time
      quizClock.value = timeLeft; // Set the quiz clock value to the time left
      overlay.className = "hidequiz"; // Hide the quiz
    }
  } else {
    // If the condition is false, the clock countdowns the time
    timeLeft --; // Decrease the value of time left by 1
    quizClock.value = timeLeft; // Set the quiz clock value to the time left
  }
}

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}