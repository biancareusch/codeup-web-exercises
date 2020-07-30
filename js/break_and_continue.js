"use strict";


//Exercise 2
function numTo50() {
    while (true) {
        var userInput = prompt("Type in a Number between 1 and 50!");
        if (userInput >= 1 && userInput <= 50) {
            alert("Thank you! Your number is " + userInput);
            break;
        } else {
            alert("Not a valid entry. Try again.");
        }
    }
}
numTo50();


//Exercise 3
function odd50() {
    while (true) {
        var userInput = prompt("Type in an odd Number between 1 and 50!");
        if (userInput >= 1 && userInput <= 50 && userInput % 2 !== 0) {
            alert("Thank you! Your number is " + userInput);
            console.log("Number to skip is: " + userInput);
            return userInput;
            break;
        } else {
            alert("Not a valid entry. Try again.");
        }
    }
}

odd50();
 // for( var i = 1; i < 50; i = i + 2){
 //        console.log("Here's an odd number: "+ i);
 //    if(i === odd50()){
 //        console.log("Yikes! Skipping number: " + odd50());
 //    }
 // }