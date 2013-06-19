//alert("JavaScript works!");

// Brandon Ruger
// SDI 1306
// Project 3

// Global Variables

var json = {
    "tellers":[ // Property: Array
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
    height: "6 feet 2 inches", // Property: String
    "skin color": "black",
    age: 30, // Property: Number
    mask: true, // Property: Boolean
    gloves: true,
    gun: false
    
};

var vaultCombo = {
    firstPart: "145",
    secondPart: "982",
    thirdPart: "143",
    getCombo: function(){ // Method: Function
        var finalCombo = this.firstPart + this.secondPart + this.thirdPart;
        
        return finalCombo; // Return string
    }
};

var copsWhoShowUp = ["Officer Jones", "Officer Ryder", "Officer Montgomery"];

var baitStrap;

var atmMachine;




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
        return true; // Return Boolean
    } else {
        console.log("He is probably just looking for help. Let's see what he needs.");
        return false;
    };
};

// Number Argument
var getMoneyStolen = function (howMuchMoney){
    if (howMuchMoney < 1000) { // Conditional
        console.log("He stole less than $1,000 dollars.");
    } else {
        console.log("He stole more than $1,000 dollars.");
    }
    return howMuchMoney; // Return Number
};

// Array Function
var whichOfficersArrived = function(copsWhoShowUp){
    console.log("The following officers arrived at the scene: " + copsWhoShowUp + ".")// Array argument
    return whichOfficersArrived; // Return Array
};


// String Argument




// Object Argument


    


// Main Code

console.log("I was working at " + bankName + " bank on " + bankLocation + " and a strange man was walking around the building.");
console.log("There had been a lot of local bank robberies lately, so all of my co-workers were on edge.");
console.log("The tellers working that day were " + json.tellers[0].tellerFirstName + ", " + json.tellers[1].tellerFirstName + ", and " +
            json.tellers[2].tellerFirstName + ".");
var areWeGettingRobbed = wasBankRobbed();
console.log("It's " + areWeGettingRobbed + " that we got robbed.");


console.log("Here was his description:");

// For Loop

for (var key in bankRobber) {
    console.log(key + ":" + bankRobber[key]);
};

var moneyStolen = getMoneyStolen(5000);
console.log("He stole " + moneyStolen + " dollars.");

// End for loop

// More Main Code

console.log("The robber forced us to open the vault. The vault combination was broken into 3 distinct parts, divided up amongst 3 staff members.");
console.log(json.tellers[0].tellerFirstName + " had the first part of the combination.");
console.log(json.tellers[2].tellerFirstName + " had the second part of the combination.");
console.log(json.tellers[1].tellerFirstName + " had the third and final part of the combination.");
var whatIsCombo = vaultCombo.getCombo();
console.log("When they put them together, they get the final combo, " + whatIsCombo + ".");


console.log("We rang the alarm to alert the cops that we needed help.");
console.log("The police called us and said there were 3 officers close by who should be arriving momentarily.");
var cops = whichOfficersArrived(copsWhoShowUp);





            