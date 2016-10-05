"use strict";

function genRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/*Function to generate an array of random values
to represet hills.*/
function hillGen(length, min, max){
    var i = 0;
    var array = [];
    for(i; i < length; i++)
        array[i] = genRandom(min, max);

    return array;
}

/*Static test cases*/
//var hills = [ 91, 97, 96, 93, 57, 24, 3, 59, 32, 28, 8, 95, 82, 3, 88, 74, 50, 24, 91, 17 ];
//var hills = [ 91, 97, 96, 93, 57, 24, 3, 59, 32, 28, 8, 29, 40, 53, 74, 88, 50, 24, 91, 17 ];

//Generate random hills. Arg 1 is array length, Arg 2 and 3 are min/max hill height
var hills = hillGen(20, 1, 100);

var hilltop = [];
var localPath = [];
var localMax;
var location;
var i;
//Display generated hills
console.log(hills);

//Number of random hops to make in order to check for local hilltop
var count = 10;

for (var i = 0; i < count; i++) {
    location = Math.floor(Math.random() * hills.length-1) + 1;
    localMax = false;
    console.log("Climbing from: " + hills[location]);
    
    while (!localMax) {
        if (hills[location + 1] > hills[location]) {
            location++;
            localPath.push(hills[location]);
        }
        else if (hills[location - 1] > hills[location]) {
            localPath.push(hills[location]);
            location--;
        }
        else {
            hilltop.push(hills[location]);
            localMax = true;
        }
    }
    console.log("Found highest local peak: " + hills[location]);
    if(localPath.length > 0)
        console.log("By climbing: " + localPath);
    localPath = [];
}

hilltop.sort();
var highest = hilltop.pop();
console.log("Highest point found: " + highest);
