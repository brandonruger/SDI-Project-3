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


var bank = {
    name: function(whatBank){ // Argument: String
        console.log("Recently I started working a new job as a banker at " + whatBank + ".");
        
        return whatBank; // Return String
    },
    location: "Main Street",
    hours: {// Property: Object
        monday:    "9-5",
        tuesday:   "9-6",
        wednesday: "9-5",
        thursday:  "9-4",
        friday:    "9-7",
        saturday:  "8-1",
        sunday:    "closed",
    }
    
    
}; //end object    
    
var billsInsideAtmMachine = {
    ones: 2000,
    fives: 1000,
    tens: 1000,
    twenties: 10000,
    
    billsStolen: function(){ // Method: Procedure
        
        var packOfTwenties = 0;
        console.log("Each pack of twenties contains $1000 dollars.");
        while (packOfTwenties <= this.twenties) { // While Loop
            console.log("He stole another pack of twenties!");
            
            packOfTwenties +=1000;
        };
    }
};

    
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
        
        return finalCombo // Return string
    }
};

var copsWhoShowUp = ["Officer Jones", "Officer Ryder", "Officer Montgomery"];


var strangeBox = {
    height: 1,
    width:  2,
    length: 3,
    getArea: function(){ // Method: Accessor
        var totalArea = this.height * this.width * this.length; // Math
        
        return totalArea;
    }, // End method accessor
    
    getAreaGuess2: function(newLength){ // Method: Mutator
        strangeBox.length = newLength;
    }
};




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
}; // end function



// Number Argument
var getMoneyStolen = function (howMuchMoney){
    if (howMuchMoney < 1000) { // Conditional
        console.log("He stole less than $1,000 dollars.");
    } else {
        console.log("He stole more than $1,000 dollars.");
    }
    return howMuchMoney; // Return Number
}; // end function



// Array Function
var whichOfficersArrived = function(copsWhoShowUp){
    console.log("The following officers arrived at the scene:")
    copsWhoShowUp.push("Officer Michaels");
    console.log(copsWhoShowUp); // Array argument
    return whichOfficersArrived; // Return Array
}; // end function




// Main Code

var newJob = bank.name("Wells Fargo");
console.log("It was a Friday morning, right after we opened. Our hours on Fridays are " + bank.hours.friday + ", so it had to be after 9 am.");    
console.log("I was covering a shift at the " + bank.location + " branch when we noticed a strange man walking around the building.");
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


// End for loop

// More Main Code

console.log("The robber forced us to open the vault. The vault combination was broken into 3 distinct parts, divided up amongst 3 staff members.");
console.log(json.tellers[0].tellerFirstName + " had the first part of the combination.");
console.log(json.tellers[2].tellerFirstName + " had the second part of the combination.");
console.log(json.tellers[1].tellerFirstName + " had the third and final part of the combination.");
var whatIsCombo = vaultCombo.getCombo();
console.log("When they put them together, they get the final combo, " + whatIsCombo + ".");


console.log("He also forced us to unlock the ATM machine.");
var getMoneyStolenFromATM = billsInsideAtmMachine.billsStolen();

var moneyStolen = getMoneyStolen(5000);
console.log("He stole " + moneyStolen + " dollars.");


var sizeOfBox = strangeBox.getArea();
console.log("Before he left, he left a strange box that he claimed contained an explosive device.");

console.log("We rang the alarm to alert the cops that we needed help.");
console.log("The police called us and said there were 3 officers close by who should be arriving momentarily.");
var cops = whichOfficersArrived(copsWhoShowUp);

console.log("When the cops asked us to recall the size of the box for the supposed explosive device, " + json.tellers[0].tellerFirstName + " guessed the area of the box was approximately " + sizeOfBox + " feet.");
strangeBox.getAreaGuess2(4);
console.log(json.tellers[2].tellerFirstName + " guessed that the area of the box was approximately " + strangeBox.getArea() + " feet.");


var jsonFunction = function(jsonTellers){ //Argument: object
    var jsonTellers = json.tellers;
    json.tellers.pop();
    return json.tellers; //Return: object
};

console.log("After the robbery, " + json.tellers[1].tellerFirstName + " decided to resign due to the stress.");
var newTellers = jsonFunction(json.tellers);
console.log("Now we only have 2 tellers:");
console.log(json.tellers)







            