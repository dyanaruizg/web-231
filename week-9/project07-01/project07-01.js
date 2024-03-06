"use strict";
/*    
  JavaScript 7th Edition
  Chapter 7
  Project 07-01

  Project to validate a form used for setting up a new account
  Author: Diana Ruiz Garcia
  Date: 03/06/2024  

  Filename: project07-01.js
*/

// Set a variable that refers to the signup form
let signupForm = document.getElementById("signup");

// Event handler to be run when a new account is submitted
signupForm.addEventListener("submit", function(e) { 
  // Set a variable that refers to the password value
  let pwd = document.getElementById("pwd").value;
  // Set a variable that refers to the feedback element
  let feedback = document.getElementById("feedback");
  
  // Function that prevent the browser from responding to the
  // submit event
  e.preventDefault();

  // Set variables containing regular expressions
  let regex1 = /[A-Z]/; // Any uppercase letter A through Z.
  let regex2 = /\d/; // Any single digit.
  let regex3 = /[!$#%]/; // Any !$#% symbol.

  // Validate the length of password is less than 8
  if (pwd.length < 8) {
    feedback.textContent = "Your password must be at least 8 characters.";
  } 
  // Validate the regex1 regular expression applied to the password returns false
  else if (!regex1.test(pwd)) {
    feedback.textContent = "Your password must include an uppercase letter.";
  } 
  // Validate the regex2 regular expression applied to the password returns false
  else if (!regex2.test(pwd)) {
    feedback.textContent = "Your password must include a number.";
  } 
  // Validate the regex3 regular expression applied to the password returns false
  else if (!regex3.test(pwd)) {
    feedback.textContent = "Your password must include one of the following: !$#%";
  } 
  // Otherwise, submit the form for processing.
  else {
    signup.submit();
  }
});