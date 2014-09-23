//paul schmid
//functions personal
//09/22/14

alert("lets find your bmi ")
var a =12
var feet=prompt('First lets see how tall you are! Please input you height.(Ft only)');
console.log(feet);
var inches=prompt('Now that we have the ft, please input your inches');
console.log(inches);


var calcInches = function( a,feet,inches) {//defining
    //code to run

    var height = feet * a + +inches;
    return height;

}
var total = calcInches(feet, a, inches);//invoking
console.log(total);

alert("you are "+total+" inches ");

 squaredA (total, total);
function squaredA (a, b) {
    var squared = a * b;
    console.log(squared);
}
    var weight = prompt(" Now that we have your height we need your weight.Please input your weight here");
    console.log(weight);

alert("Calculating your  BMI at "+total+"inches and "+weight+"lbs!");






