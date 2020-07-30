"use strict";

//exercise 2
function showMultiplicationTable(input){
for(var x = 1; x <= 10; x++){
    console.log(x + " * " + input + " = " + (x * input));

}}
showMultiplicationTable(7);

//exercise 3
for(var x = 1; x <=10; x++){
    var randomNum = Math.floor(Math.random() * 150) + 50;
    if(randomNum % 2 === 0){
        console.log(randomNum + " is even");
    }else {
        console.log(randomNum + " is odd");
    }
}

//exercise 4
// var oneTwo = 1;
//
// for(x = 1; x < 10; x++){
//     for(oneTwo = 1; oneTwo < 10; oneTwo++){
//         console.log(x);
//     }
// }

//exercise 5
for(var x = 100; x >= 5 ; x = x - 5){
    console.log(x);
}



