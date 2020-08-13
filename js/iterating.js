
    "use strict";
	var names = ["anna", "belle", "bianca", "josh"];
    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
	console.log(names.length);
    // TODO: Create a log statement tha

    for (var i = 0; i < names.length; i++){
    console.log("The name is " + names[i]);
    }
    names.forEach(function (element, index, array) {
        console.log("The name at index " + index + " is " + element);
    });

    // TODO: Create log statements that will print each of the names array elements individually.

