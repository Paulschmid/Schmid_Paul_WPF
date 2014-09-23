//while loops
console.log("--loops--");
var b=10;//sets up the index

while(b > 0 ){//checks the condition
    console.log(b + 'kegs on the wall');
    b--; //increments or decrements the index
}


console.log('--do while loops--');
var c = 10;
do{
    console.log(c+'kegs on the wall');
    c--;
}
while (c > 0);



console.log ('---- for loop ---');
//setup index, check is i greater than 0, increments
for ( var i =10; i > 0 ; i-- ){
    console.log (i + 'kegs on the wall')
}

//break jumps out of the loop
// continue moves back to top of loop