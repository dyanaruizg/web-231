"use strict";
/*    
  JavaScript 7th Edition
  Chapter 6
  Project 06-03

  Script to complete a form containing billing and shipping address information
  Author: Diana Ruiz Garcia
  Date: 02/29/2024  

  Filename: project06-03.js
*/

// Global variables
let useShip = document.getElementById("useShip");
let billShip = document.forms.billShip;

// Event handlers to be run when the use the same shipping address 
// for billing address box is clicked
useShip.addEventListener("click", copyShippingToBilling);

// Function that copies values from the shipping fields to corresponding billing fields
function copyShippingToBilling() {
  // Check if the use the same shipping address box is checked
  if (useShip.checked) {
    // Set the bill values to the value of the ship fields
    billShip.elements.firstnameBill.value = billShip.elements.firstnameShip.value;
    billShip.elements.lastnameBill.value = billShip.elements.lastnameShip.value;
    billShip.elements.address1Bill.value = billShip.elements.address1Ship.value;
    billShip.elements.address2Bill.value = billShip.elements.address2Ship.value;
    billShip.elements.cityBill.value = billShip.elements.cityShip.value;
    billShip.elements.countryBill.value = billShip.elements.countryShip.value;
    billShip.elements.codeBill.value = billShip.elements.codeShip.value;

    // Set the selectedIndex property of the state bill field to the value of the 
    // selectedIndex property of the state ship field.
    billShip.elements.stateBill.selectedIndex = billShip.elements.stateShip.selectedIndex;
  } else {
    // Reset the bill values when the use the same shipping address box is unchecked
    billShip.elements.firstnameBill.value = "";
    billShip.elements.lastnameBill.value = "";
    billShip.elements.address1Bill.value = "";
    billShip.elements.address2Bill.value = "";
    billShip.elements.cityBill.value = "";
    billShip.elements.countryBill.value = "";
    billShip.elements.codeBill.value = "";
    billShip.elements.stateBill.selectedIndex = 0;
  }
}

// Declare a variable to store a list of nodes corresponding to the selected elements 
// in the form with input-type text
let formElements = document.querySelectorAll('input[type="text"]');
// Declare a variable with a value equal to the length of the node list
let fieldCount = formElements.length;
// Declare a variable referencing the error box element
let errorBox = document.getElementById("errorBox");

// Add an event listener for every form element in the node list
for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

// Function that prevent the browser from applying the native browser tools to 
// respond to invalid data
function showValidationError(evt) {
  evt.preventDefault();
  errorBox.textContent = "Complete all highlighted fields";
}