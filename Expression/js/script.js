//Expressions

var a = 2;//sets up our variable a and defines it with 2
a = a + 3; //add 3 to a

console.log(a);

//Expressions - Age Example

var yearborn = 1987;
var age = 2014 - yearborn;

console.log(age);

//Expressions - Arithmetic Operators

//area of the triangle is half of the width times the height
var width = 8;
var height = 7;
var area = width * height;
area = width * height/2
console.log(area);

//Expressions- Modulo Operator

var remainder = 32 % 10;
console.log(remainder);

//Expressions - PEMDAS- The Order of Operations

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

// the average is the sum of the items divided by the number of items
var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;
//console.log(average);

var length = 7;
var width = 6;
var perimeter = length * 2 + width * 2;
console.log(perimeter);

//Expressions - Concatenating Strings

var firstName = "paul";
var lastName = "schmid";
var fullName = firstName + " " + lastName;

console.log(fullName);

//Casting

var stringVar = "6";
var result = 7 + Number(stringVar);
//console.log(result);

var areaCode = 407;
var firstPart = 203;
var secPart = 4529;

var phoneNo = "(" + String(areaCode)+ ")" + String(firstPart) + "-" + String(secPart);
console.log(phoneNo)

// Expressions - Assignment Operators

var a = 3;
a += 4;//a = a + 4 works with all math

console.log(a);