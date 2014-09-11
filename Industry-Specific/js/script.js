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

alert(" Your "+vehicleYear+vehicleMake+vehicleModel+" gets "+year+" oil changes per year and "+twoYears+" every two years");

var amount=quarts*time
control.log(amount);















