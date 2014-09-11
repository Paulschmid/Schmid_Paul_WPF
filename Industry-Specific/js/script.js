// paul schmid
//09/10//14
//Industry-Specific

//How many quarts of oil will you use?

vehicleYear=prompt("What year of vehicle do you own?");
console.log(vehicleYear);
vehicleMake=prompt("What make vehicle do you own?");
console. log (vehicleMake);
vehicleModel=prompt("What model vehicle do you own?");
console.log(vehicleModel);

alert(" Now lets see how many quarts your "+vehicleYear+vehicleMake+vehicleModel+" should use over time!");

quarts=prompt("How many quarts of oil does your "+vehicleYear+vehicleMake+vehicleModel+" use per oilchange?");
console.log(quarts);
time=prompt("In the maintenance book what is the number of months between oil changes?");
console.log(time);

var a = 12
var b = 24

var year= a / time;
var twoYears= b / time;
console.log(year);
console.log(twoYears);

alert(" Your "+vehicleYear+vehicleMake+vehicleModel+" gets "+year+" oil changes in one year and "+twoYears+" every two years");


var amount=quarts*year;
var amountTwo=quarts*twoYears;
console.log(amount);
console.log(amountTwo);

alert( " Your "+vehicleYear+vehicleMake+vehicleModel+" will use "+amount+" quarts in one year and "+amountTwo+" quarts every two years! ")

alert(" Some vehicles also can go by the mileage! Lets see how many quarts you use, if going by the mileage");

miles=prompt(" Per your maintenance book how many miles are suppose to go between oil changes?");
console.log(miles);

var a = 60000
var b = 120000
var c = 180000

var low= a /miles;
var medium= b /miles;
var high= c / miles;

console.log(low);
console.log(medium);
console.log(high);

alert(" If going by mileage your "+vehicleYear+vehicleMake+vehicleModel+" will get an oil change every "+miles+"miles!");

var total= low * quarts;

alert("every 60000 miles you will have "+low+" oil changes! This means you will use "+total+" quarts of oil. ")

console.log ("What year of vehicle do you own?")
console.log("What make vehicle do you own?")
console.log(" Now lets see how many quarts your "+vehicleYear+vehicleMake+vehicleModel+" should use over time!")
console.log(" Your "+vehicleYear+vehicleMake+vehicleModel+" gets "+year+" oil changes in one year and "+twoYears+" every two years")
console.log(" Your "+vehicleYear+vehicleMake+vehicleModel+" will use "+amount+" quarts in one year and "+amountTwo+" quarts every two years!")
console.log("If going by mileage your "+vehicleYear+vehicleMake+vehicleModel+" will get an oil change every "+miles+"miles!")











