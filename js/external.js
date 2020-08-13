"use strict";
console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

//first exercise
var color = prompt("What's your favorite color?");
alert("Great, " + color + " is my favorite color too!");

var movie1 = 3;
var movie2 = 5;
var movie3 = 1;

var total = (movie1 + movie2 + movie3) * 3;
console.log("Total amount is " + total);





//second exercise
var gPay = 400;
var aPay = 380;
var fPay = 350;
var gHrs = 6;
var aHrs = 4;
var fHrs = 10;

var totalPay = (gPay * gHrs) + (aPay * aHrs) + (fPay * fHrs);
console.log("Total Pay is " + totalPay);

//third exercise
var maxStudent = 17;
var bash = prompt("How many students are in class?")
var schedule= true;

function enrolling() {
    if (bash < maxStudent) {
      //  bash++;
        var enroll = true;
        alert("You may enroll");
        ;
    } else {
        enroll = false;
        alert("You can not enroll");
    }
    return enroll;
}
enrolling();
// var classIsFull = false;
// var scheduleHasConflicts = false;
// var canEnroll = ! classIsFull && ! scheduleHasConflicts;

//console.log(canEnroll);


//fourth exercise
//a product offer can only be applied
//if var person = >2 && if offeravail = true;
//else if premium member =  true;

var amountOfProduct = prompt("How many products do you have?");
var offerAvail = confirm("Is the offer still available?");
var premium = confirm("Are you a premium member?");

function coupon() {
    if (amountOfProduct > 2) {
        var offerValid = true;
    }else if (offerAvail = true){
        offerValid = true;
    }else if (premium = true){
        offerValid = true;
    }else {
        offerValid = false;
    }
    return offerValid;
    alert("you're eligible for this offer");
}
coupon();


// var itemsBought = 3;
// var offerValid = true;
// var isPremiumMember = true;

// var canApplyOffer = offerValid && (itemsBought > 2 || isPremiumMember);

//console.log(canApplyOffer);
