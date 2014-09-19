//paul schmid
//9/17/2014
//conditionals

alert(" This game requires 18 yrs or older to buy!");


var ageA  = prompt("How old is purchaser");
console.log(ageA);

var ageMin = 18;
var adultMin=18;
var ageB = ageA;
var adultA = adultB;
var noInput = "";

//if no age is put for purchaser
if (ageA == noInput)  {
    var noInput = prompt("No age was added! Age must be imputed to continue!");
    console.log(noInput);
}else if
    (ageB >= ageMin){
    //If age of purchaser is older than or equal to 18 they can purchase
    alert( "You are of age to purchase this game!! Congrats");
    console.log("Able to purchase game");
}
// You must be over 18 this will make them get a person over the age!
else {
    alert(" You are not over 18! To purchase get an adult!");
    console.log(" To purchase find an parent or guardian ");
}
//Asking adult for age
 var adultA = adultB;

var adultB = prompt("What is the age of adult purchaser");
console.log(adultB);
//prompt if no input is added to age!
if (adultA == noInput) {
    var noInput = prompt("Adults age not inserted redo age!");
    console.log(noInput);
} else if
    (adultB <= adultMin);

else {
    //adult must purchase game
    alert("The adult may purchase the game");
    console.log("Adult may purchase the game");
}
//alert to notify that adult must be over the age of 18
if (adultB < adultMin) {
    alert( "Purchaser must be over age 18");
}

var good= ( ageA>ageMin && adultB>adultMin);
console.log(good);

