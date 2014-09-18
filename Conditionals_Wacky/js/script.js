//paul schmid
//9/16/2014
//conditionals


alert(" This movie requires that all viewers be over the age of 17 or accompanied by an adult.");

    var kidAge  = prompt("How old are you?");
      console.log(kidAge);




    var minAge= 17;
    var adultMin=18
    var childAge = kidAge;
    var adultAge = oldTimer;
    var noInput = "";

//if no input is put in kidAge prompt will be activated!
if (kidAge == noInput)  {
    var noInput = prompt(" Make sure to input your age?");
    console.log(noInput);
}else if
        (childAge >= minAge){
            //If kidAge is over 17, entrance allowed
                     alert( "Enjoy the movie!");
                         console.log("Enjoy the movie!");
}
// if kidAge is not over 17 age is not permitted adult is required
        else {
    alert(" You will need an adult to view this movie");
    console.log(" You will need an adult to see this movie ");


//prompt to find out age of adult
    var oldTimer = adultAge;

    var oldTimer = prompt(" What age is the adult present?");
    console.log(oldTimer);
    //prompt if no input is added to age of adult prompt!
    if (oldTimer == noInput) {
        var noInput = prompt("Make sure to input adults age!");
        console.log(noInput);
    } else if
        (oldTimer <= minAge);

     else {
        //child and adult are allowed to see the movie!
        alert("With the company of this adult! You are allowed to view the movie!");
        console.log("Adult and child are allowed to see the movie!");
    }
    if (oldTimer < adultMin) {
        alert( "Adult must be over the age of 18");
}
}


