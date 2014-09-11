// paul schmid
// 9/9/2014
// Expressions

// calculate number of utensils needed?

var name = prompt("May I have your Name:");
console.log(name);

alert("Hello "+name+"! Lets see how many people you have!");

var adults= prompt(" How many adults are eating");
console.log(adults);

var children= prompt(" How many children are eating");
console.log(children);

var total= adults*1 + children*1;
console.log(total);

alert(" You have a total of "+total+" people eating!");

var fork = total ;
var spoon= total ;
var knife= total ;
var plate= total ;
var bowl= total ;

var totalUt= fork + spoon + knife + plate + bowl;
console.log(totalUt);

alert( " You will need "+totalUt+" to feed the amount of people shown. This includes 1 fork, 1 knife, 1 spoon, 1 plate,and 1 bowl.")











