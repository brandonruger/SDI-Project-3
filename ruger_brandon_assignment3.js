//alert("JavaScript works!");

// Brandon Ruger
// SDI 1306
// Project 3

// Global Variables

var bankRobber = {
    height: "6 feet 2 inches",
    skinColor: "black",
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

console.log("Last night I had a nightmare. I was working at a bank and a " + bankRobber + "came inside to rob us.");


            