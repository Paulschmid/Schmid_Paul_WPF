//paul schmid
// 9/11/2014/
// Expressions**

 var firstN=prompt ("What is your first name?");
console.log(firstN);

var lastN=prompt ("What is your last name?");
console.log(lastN);

var first=firstN;
var last=lastN;
fullName=first + " " +last;
console.log(fullName);

alert(" I would like to know how many cds and dvds that you have?");

var dvds=prompt ("how many dvds do you have?");
console.log(dvds);
var cds=prompt ("how many cds do you have?");
console.log(cds);

alert(" Off the info given you have "+dvds+" dvds and "+cds+" cds!");

var dvdTypes=["horror", "action", "comedy", "romance"];
console.log(dvdTypes);



alert("Now I would like to know the amount of each type that you have");

var horrorD=prompt("How many horror dvds do you have?");
console.log(horrorD);
var actionD=prompt("How many action dvds do you have?");
console.log(actionD);
var comedyD=prompt("How any comedy dvds do you have?");
console.log(comedyD);
var romanceD=prompt("How many romance dvds do you have?");
console.log(romanceD);

var average=(horrorD + actionD + comedyD + romanceD)/4;
console.log(average);
alert("The average of dvds is "+average+"!");
console.log(average);

alert("Now let me get some information on cds");
var rockCd=prompt('How many rock cds do you have?');
console.log(rockCd);
var rapCd=prompt('How many rap cds do you have?');
console.log(rapCd);
var hipHop=prompt("How many hiphop cds do you have?");
console.log(hipHop);
var countryCd=prompt("How many country cds do you have?");
console.log(countryCd);

var cdTypes=["Rock", "Rap", "HipHop", "country"];
console.log(cdTypes);

var averageC =( rockCd + rapCd + hipHop + countryCd )/4
console.log(averageC);

alert("The average of cds is "+averageC+" !");

