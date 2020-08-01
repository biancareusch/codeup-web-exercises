"use strict";
 var userInput;

//Exercise 2
function oddTo50() {
    while (true) {
         userInput = prompt("Type in a Number between 1 and 50!");
        if (userInput >= 1 && userInput <= 50 && userInput % 2 != 0) {
            alert("Thank you! Your number is " + userInput);
            break;
        } else {
            alert("Not a valid entry. Try again.");
        }
    }
}
oddTo50();


//Exercise 3
var userInput;
function skip50() {
    while (true) {
        userInput = prompt("Type in an odd Number between 1 and 50!");
        if (userInput >= 1 && userInput <= 50 && userInput % 2 !== 0) {
            alert("Thank you! Your number is " + userInput);
            return userInput;
            break;
        } else {
            alert("Not a valid entry. Try again.");
        }
    }
}

 var i = 1;
console.log("The number to skip is: "+ userInput);
while(i < 50){
    if (i == parseInt(userInput)) {
        console.log("Yikes Skipping the number: "+ userInput);
    } else{
        console.log("Here is an odd number: " + i);
    }
     i += 2;
}



