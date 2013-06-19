//alert("JavaScript works!");

// Brandon Ruger
// SDI 1306
// Project 3

// Global Variables

var json = {
    "tellers":[
        {
            "tellerFirstName": "Britney",
            "tellerLastName": "Stevens"
        },
        {
            "tellerFirstName": "Abigail",
            "tellerLastName": "Bruce"
        },
        {
            "tellerFirstName": "Michelle",
            "tellerLastName": "Stanford"
        }
    ]
};

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

//var vaultCombo = 


// Functions

// Boolean Argument
var wasBankRobbed = function(){
    if (bankRobber.mask === true) {
        console.log("I think he's going to rob us! - Shouted one of the employees.");
        if (bankRobber.gun === true) { //Nested conditional
            console.log("He's got a gun!");
        } else {
                console.log("Just stay calm. Give him whatever he asks for and we will all be okay.");
        };
        return true;
    } else {
        console.log("He is probably just looking for help. Let's see what he needs.");
        return false;
    };
};

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

console.log("I was working at " + bankName + " bank on " + bankLocation + " and a strange man was walking around the building.");
console.log("There had been a lot of local bank robberies lately, so all of my co-workers were on edge.");
console.log("The tellers working that day were " + json.tellers[0].tellerFirstName + ", " + json.tellers[1].tellerFirstName + ", and " +
            json.tellers[2].tellerFirstName);
var areWeGettingRobbed = wasBankRobbed();
console.log("It's " + areWeGettingRobbed + " that we got robbed.");


console.log("Here was his description:");

// For Loop

for (var key in bankRobber) {
    console.log(key + ":" + bankRobber[key]);
};

var moneyStolen = getMoneyStolen(5000);
console.log("He stole " + howMuchMoney + " dollars.");



            