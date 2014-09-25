//paul schmid
//industry
//11/23/2014

alert(" Lets see if your child is in elementary school!");

var kidAge  = prompt("How old is your child?");
console.log(kidAge);




var minAge= 5;
var maxAge=10;

var noInput = "";

//if no input is put in kidAge prompt will be activated!
if (kidAge == noInput)  {
    var noInput = prompt(" Make sure to input your child's age?");
    console.log(noInput);
}else if
    (childAge >= minAge && childAge<=maxAge){
    //If kidAge is over 17, entrance allowed
    alert( "Your child meets the age requirement for this school!");
    console.log("Welcome to our school");
}

//kidAge is not over 17 age is not permitted adult is required
else {
    alert(" your child does not meet age required for elementary school.");
    console.log(" Age not met! ");
}

