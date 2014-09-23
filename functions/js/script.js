//functions basics//function execution//variable scope//
function outptMsg() {
    console.log("Hello World")

}
function calcArea(){
    var width=20;
    var height=30;
    var area = width * height;
    console.log(area);
}
calcArea();

//functions - parameters and arguments

calcArea(30, 20);
function calcArea(w, h){ //w=30, h=20
    var area= w * h;
    console.log(area);
}
function dogYears(age){//parameter

    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + "years old" )
}
dogYears(6);//arguments

//Function - Returning Value
calcArea(30, 20);
var total = calcArea(30, 20);
function calcArea(w, h) {
    var area = w * h;
    return area; //function spitting info out
}
    console.log (total);

//Anonymous function
var calcArea = function(width, height){//defining
    //code to run
    var area= width * height;
    return area;
}
var a = calcArea(20, 30);//invoking
console.log(a);

//anonymous functions must be declared before there called

//lynda
function calculateLoan(amount, months, interest, name){

}
calculateLoan(10000, 60, 7, "Sam Jones");
calculateLoan(10000, 60, 7,"Sam Jones","Something Extra");
calculateLoan(10000, 60);//missing are passed as "undefined"