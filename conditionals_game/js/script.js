//paul schmid
//9/17/2014
//conditionals

alert(" This game requires 18 yrs or older to buy!");


var ageA  = prompt("How old is purchaser");
console.log(ageA);

var ageMin = 18;
var adultA=18;
var ageB = ageA;
var adultA = adultB;
var noInput = "";

//if no age is put for purchaser
if (ageA == noInput)  {
    var noInput = prompt("No age was added! Age must be imputed to continue!");
    console.log(noInput);
}else if
    (ageA >= ageMin){
    //If age of purchaser is older than or equal to 18 they can purchase
    alert( "You are of age to purchase this game!! Congrats");
    console.log("Able to purchase game");
}
// You must be over 18 this will make them get a person over the age!
else {
    alert(" You will need an adult to view this movie");
    console.log(" You will need an adult to see this movie ");
}