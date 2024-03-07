/*    
  JavaScript 7th Edition
  Chapter 3
  Project 03-01

  Application to calculate total order cost
  Author: Diana Ruiz Garcia
  Date: 01/29/2024   

  Filename: project03-01.js
*/

// Declare global variable for the application
let menuItems = document.getElementsByClassName("menuItem");

// Set the total cost of the order when the item is selected
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}

// Calculate the total cost of the order
function calcTotal() {
  let orderTotal = 0;

  // Add the total cost of the item if purchased
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
    }
  }

  // Display the total cost of the bill
  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}