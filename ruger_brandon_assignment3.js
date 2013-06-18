//alert("JavaScript works!");

// Brandon Ruger
// SDI 1306
// Project 3

// Global Variables

var bankLocation = "Main Street";
var bankName = "Wells Fargo";
var bankRobber = {
    height: "6 feet 2 inches",
    "skin color": "black",
    age: 30,
    mask: true,
    gloves: true,
    gun: false
    
};

// Functions

// Number Argument
var getMoneyStolen = function (howMuchMoney){
    if (howMuchMoney < 1000) {
        console.log("He stole less than $1,000 dollars.");
    } else {
        console.log("He stole more than $1,000 dollars.");
    };
    return howMuchMoney; // Return Number
};


    


// Main Code

console.log("Last night I had a nightmare. I was working at " + bankName + " on " + bankLocation + " and a masked man came inside to rob us.");
console.log("Here was his description:");

// For Loop

for (var key in bankRobber) {
    console.log(key + ":" + bankRobber[key]);
};

            