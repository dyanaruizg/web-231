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
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

// Declare variables to refer each type of food 
let chicken = document.getElementById("chicken");
let halibut = document.getElementById("halibut");
let burger = document.getElementById("burger");
let salmon = document.getElementById("salmon");
let salad = document.getElementById("salad");

// set the total cost of the food when the item is selected
chicken.addEventListener("change", calcTotal);
halibut.addEventListener("change", calcTotal);
burger.addEventListener("change", calcTotal);
salmon.addEventListener("change", calcTotal);
salad.addEventListener("change", calcTotal);

// calculate the total cost of the food
function calcTotal() {
  let cost = 0;
  let buyChicken = chicken.checked;
  let buyHalibut = halibut.checked;
  let buyBurger = burger.checked;
  let buySalmon = salmon.checked;
  let buySalad = salad.checked;

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