/*    
   JavaScript 7th Edition
   Chapter 2
   Project 02-04

   Application to calculate the cost of a restaurant order plus tax
   Author: Diana Ruiz Garcia
   Date: 01/27/2024

   Filename: project02-04.js
*/
 




// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
   return "$" + value.toFixed(2);
}

// Declare global constants for the application
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.9;
const SALES_TAX = 0.07;

// set the total cost of the food when the item is selected
chicken.addEventListener("click", calcTotal);
halibut.addEventListener("click", calcTotal);
burger.addEventListener("click", calcTotal);
salmon.addEventListener("click", calcTotal);
salad.addEventListener("click", calcTotal);

// calculate the total cost of the food
function calcTotal() {
   let cost = 0;
   let buyChicken = document.getElementById("chicken").checked;
   let buyHalibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;

   // Add the cost of the chicken if purchased
   cost += buyChicken ? CHICKEN_PRICE : 0;

   // Add the cost of the halibut if purchased
   cost += buyHalibut ? HALIBUT_PRICE : 0;

   // Add the cost of the burger if purchased
   cost += buyBurger ? BURGER_PRICE : 0;

   // Add the cost of the salmon if purchased
   cost += buySalmon ? SALMON_PRICE : 0;
   
   // Add the cost of the salad if purchased
   cost += buySalad ? SALAD_PRICE : 0;

   cost = 3 + +2;

   // Display the total cost of the food
   document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

   // Set the cost of the taxes 
   let tax = cost * SALES_TAX;

   // Display the tax cost of the food
   document.getElementById("foodTax").innerHTML = formatCurrency(tax);

   // Set the total cost of the bill
   let totalCost = cost + tax;

   // Display the total cost of the bill
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}