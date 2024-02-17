/*    
  JavaScript 7th Edition
  Chapter 3
  Project 03-02

  Application to generate a slide gallery
  Author: Diana Ruiz Garcia
  Date: 02/06/2024

  Filename: project03-02.js
*/

// Initialize an array to hold the captions for the images
let captions = new Array(14);
// Fill the array with the captions
captions[0]="International Space Station fourth expansion [2009]";
captions[1]="Assembling the International Space Station [1998]";
captions[2]="The Atlantis docks with the ISS [2001]"; 
captions[3]="The Atlantis approaches the ISS [2000]"; 
captions[4]="The Atlantis approaches the ISS [2000]"; 
captions[5]="International Space Station over Earth [2002]";
captions[6]="The International Space Station first expansion [2002]";
captions[7]="Hurricane Ivan from the ISS [2008]";
captions[8]="The Soyuz spacecraft approaches the ISS [2005]";
captions[9]="The International Space Station from above [2006]";
captions[10]="Maneuvering in space with the Canadarm2 [2006]";
captions[11]="The International Space Station second expansion [2006]";
captions[12]="The International Space Station third expansion [2007]";
captions[13]="The ISS over the Ionian Sea [2007]";

// Initialize the htmlCode variable with an empty string
// This variable will hold the HTML code for the image gallery
let htmlCode = "";

// Loop through the captions array
for (let i = 0; i < captions.length; i++) {
  // For each caption, add a figure element to the htmlCode string
  // The figure element includes an img element and a figcaption element
  // The src attribute of the img element is set to the corresponding image file
  // The text content of the figcaption element is set to the caption
  htmlCode += "<figure>";
  htmlCode += "<img alt='' src='slide" + i + ".jpg' />";
  htmlCode += "<figcaption>caption[" + i + "]</figcaption>";
  htmlCode += "</figure>";
}

// Set the innerHTML of the element with the id 'gallery' to the htmlCode string
// This adds the image gallery to the page
document.getElementById("gallery").innerHTML = htmlCode;