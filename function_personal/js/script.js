//paul schmid
//functions personal
//09/22/14

alert("lets find your bmi ")
var a =12
var feet=prompt('First lets see how tall you are! Please input you height.(Ft only)');
console.log(feet);
console.log("------height ft------");
var inches=prompt('Now that we have the ft, please input your inches');
console.log(inches);
console.log("------height inches------");


var calcInches = function( a,feet,inches) {//defining
    //code to run

    var height = feet * a + +inches;
    return height;
}
 var total = calcInches(feet, a, inches);//invoking
console.log(total);
console.log("---total height inches---");



heightB (total, total);
function heightB (a, b) {
    var heightC = a * b;
    console.log(heightC);
    console.log("---squared height---");
}
alert("you are "+total+" inches ");

    var weight = prompt(" Now that we have your height we need your weight.Please input your weight here");
    console.log(weight);
    console.log("---prompt for weight---");


alert("Calculating your  BMI at "+total+"inches and "+weight+"lbs!");

function calc(){
    var heightC =total*total;
    var w=weight;
    var mixWnH = weight / heightC;
    console.log(mixWnH);
}
calc()
var heightZ =total*total;
var mixWnH = weight/heightZ;
calcBmi(mixWnH,703);
function calcBmi(w, h) {
    var bmiActual = w * h;
    console.log(bmiActual);
    alert("You have a bmi of " + bmiActual + "! Round to to the nearest hundredths");
}