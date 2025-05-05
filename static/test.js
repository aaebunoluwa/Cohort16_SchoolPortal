// test.js - JavaScript Test File

// Runs when the page loads
window.onload = function () {
    alert("Welcome to the test page!");
    console.log("JavaScript is loaded and working.");
};

// Changes heading text and color
function changeHeadingColor() {
    const heading = document.getElementById("main-heading");
    heading.style.color = "blue";
    heading.innerText = "Color changed by JavaScript!";
}

// Counter logic
let counter = 0;
function increaseCounter() {
    counter++;
    const counterDisplay = document.getElementById("counter-display");
    counterDisplay.innerText = `Button clicked ${counter} time${counter !== 1 ? 's' : ''}.`;
}

// Display user name from input
function displayName() {
    const input = document.getElementById("name-input");
    const output = document.getElementById("name-output");
    const name = input.value.trim();

    if (name) {
        output.innerText = `Hello, ${name}! 👋`;
    } else {
        output.innerText = "Please enter your name.";
    }
}