"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// function analyzeColor(colors){
//     if(colors === "blue"){
//         return "blue is the color of the sky.";
//     } else if( colors === "red"){
//         return "red is the color of roses";
//     }else if (colors === "cyan"){
//         return "I don't know anything about cyan";
//     }else {
//         return "Color is not defined";
//     }
// }
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
//
// var pickColor = prompt("Pick a color");
// function analyzeColor(x) {
//     switch(x) {
//         case 'red' :
//             return("red is the color of roses");
//             break;
//         case 'blue' :
//             return("blue is the color of the sky");
//             break;
//         case 'cyan' :
//             return("i don't know anything about cyan");
//             break;
//         default:
//             return(pickColor + " is not defined");
//             break;
//     }
// }
// var response = analyzeColor(pickColor);
// alert(response);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// var total = prompt("What's your total?");
//
// function calculateTotal(x,total) {
//     if(x == 0){
//         return (total + ". Sorry, no Discount.");
//     } else if (x == 1){
//         return total -(total*0.10);
//     }else if(x == 2){
//         return total -(total*0.25);
//     }else if(x == 3){
//         return total -(total*0.35);
//     }else if(x == 4){
//         return total - (total*0.5);
//     }else if(x == 5){
//         return ("0, It's all free!");
//     }
// }
//
// alert("Your lucky number is: "+ luckyNumber + ". You total was $" + total+ ". Now your total is: $" + calculateTotal(luckyNumber, total));
//
// console.log(luckyNumber);
// console.log( total );
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function userNum() {
    var conf = confirm("Would you like to enter a number?");
    if (conf == true) {
        var num = prompt("Please enter your number.");
        console.log(num);
        return num;
    }else {
        alert("You haven't entered a number");
    }
}

var userInput = userNum();

function numEven(x){
    if (x % 2 == 0){
        alert("Your number is even.");
        console.log("number even")
    } else {
        alert("Your number is odd.");
        console.log("number odd")
    }
}
numEven(userInput);

alert("Your number plus 100 equals " + (parseInt(userInput) + 100));

function numPos(x){
    if (x => 0){
        alert("Your number is positive!");
    }else {
        alert("Your number is negative.");
    }
}
numPos(userInput);