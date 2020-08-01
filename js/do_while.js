"use strict";
var allCones = Math.floor(Math.random() * 50) + 50;

console.log("I have " + allCones + " cones today!");
do {
    var conesSold = Math.floor(Math.random() * 5) + 1;
    if(conesSold <= allCones){
        console.log(conesSold + " cones sold...");
        allCones = allCones - conesSold;
    } else {
        console.log("Cannot sell you " + conesSold + " I only have " + allCones + "...");
    }
}while (allCones > 0);

console.log("Yay! I sold them all!");

// print allCones = 50
// conesSold = 5
// conesLeft = 50 - 5 = 45
// if conesLeft 45 < 5
// print cannot sell u 5 i only have 45
// else
//     5 cones sold;
//
// while 50 > 0