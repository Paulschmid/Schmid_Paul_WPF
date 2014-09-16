//Conditional Logic- Relational Expression

var kidHeight = 46;
var minHeight= 48;
var sneakerLift= 2;

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if (kidHeight + sneakerLift >= minHeight ){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}else{
//code performed if condition is false
    console.log("Sorry kid, you got some growing to do");
}

//Relational Expression//conditional logic -With an Expression

var kidHeight = 48;
var kidHeight = 48
var sneakerLift = 2;
//if the kid is over 48 inches in height
if(kidHeight + sneakerLift > minHeight){
//code performed if condition is true
    console.log("You can ride the coaster! Welcome");
}

//conditionalLogic-else if

var kidHeight = 50;
var minHeight = 53;
var wParentHeight=45; //height of kid with a parent
//if the child is old enough, print to the console "You can ride!"
//if the child is over 48 inches in height
if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!!")

} else if (kidHeight > wParentHeight){
    //code you can ride with a parent present
    console.log(" You can ride with a parent present!!")
}else{
//sorry kid you got some growing to do
    console.log(" Sorry kid, you've got some growing to do!!")

}

//Conditional Logic - Ternary Operators

var gpa =3.5;
//if the gpa is over the min 2.0 score, the student can graduate
/*if(gpa>2.0){
    console.log("You can graduate!");
}else{
    console.log("Better Luck Next Year!");
}*/

(gpa > 2.0)? console.log("You can graduate!"):console.log("GPA Too Low!");
