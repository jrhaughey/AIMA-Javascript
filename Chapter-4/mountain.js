"use strict";

//Heights for the image height.png
var hills =     [[111,111,122,137,226,192,246,275,285,333,328,264,202,175,151,222,250,222,219,146],
                 [205,186,160,218,217,233,268,300,316,357,276,240,240,253,215,201,256,312,224,200],
                 [228,176,232,258,246,289,306,351,374,388,319,333,299,307,261,286,291,355,277,258],
                 [228,207,263,264,284,348,368,358,391,387,320,344,366,382,372,394,360,314,259,207],
                 [238,237,275,315,353,355,341,332,350,315,283,310,355,350,336,405,361,273,264,228],
                 [245,264,289,340,359,349,336,303,267,259,285,340,315,290,333,372,306,254,220,220],
                 [264,287,331,365,382,381,386,360,299,258,254,284,264,276,295,323,281,233,202,160],
                 [300,327,360,355,365,402,393,343,307,274,232,226,221,262,289,250,252,228,160,160],
                 [343,379,373,337,309,336,378,352,303,290,294,241,176,204,235,205,203,206,169,132],
                 [348,348,364,369,337,276,321,390,347,354,309,259,208,147,158,165,169,169,200,147],
                 [320,328,334,348,354,316,254,315,303,297,283,238,229,207,156,129,128,161,174,165],
                 [297,331,304,283,283,279,250,243,264,251,226,204,155,144,154,147,120,111,129,138],
                 [302,347,332,326,314,286,223,205,202,178,160,172,171,132,118,116,114, 96, 80, 75],
                 [287,317,310,293,284,235,217,305,286,229,211,234,227,243,188,160,152,129,138,101],
                 [260,277,269,243,236,255,343,312,280,220,252,280,298,288,252,210,176,163,133,112],
                 [266,255,254,254,265,307,350,311,267,276,292,355,305,250,223,200,197,193,166,158],
                 [306,312,328,279,287,320,377,359,289,328,367,355,271,250,198,163,139,155,153,190],
                 [367,357,339,330,290,323,363,374,330,331,415,446,385,308,241,190,145, 99, 88,145],
                 [342,362,381,359,353,353,369,391,384,372,408,448,382,358,256,178,143,125, 85,109],
                 [311,337,358,376,330,341,342,374,411,408,421,382,271,311,246,166,132,116,108, 72]];

var hilltop = [];
var localPath = [];
var localMax;
var location;
var i;
var up, down, left, right;


//Look up/down/left/right for altitudes
var directions = function(x, y){
    var temp;

    temp = x + 1;
    if(temp < 20)
        up = hills[x + 1][y];

    temp = x - 1;
    if(temp >= 0)
        down = hills[x - 1][y];

    temp = y - 1;
    if(temp >= 0)
        left = hills[x][y - 1]; 
    
    temp = y + 1;  
    if(temp < 20)
        right = hills[x][y + 1];
}

//Number of random hops to make in order to check for local hilltop
var count = 3;

for (var i = 0; i < count; i++) {
    var x = Math.floor(Math.random() * hills.length-1) + 1;
    var y = Math.floor(Math.random() * hills.length-1) + 1;
    location = hills[x][y];
    localMax = false;

    console.log("Climbing from: " + x + " " + y + " Altitude: " + hills[x][y]);
    directions(x, y);
    
    while (!localMax) {
        if ((right > location) && (right > left) && (right > up) && (right > down)){
            y++;
            console.log("Right to Altitude: " + hills[x][y]);
            localPath.push("Right");
        }
        else if ((left > location) && (left > right) && (left > up) && (left > down)){
            y--;
            console.log("Left to Altitude: " + hills[x][y]);
            localPath.push("Left");
        }
        else if ((up > location) && (up > left) && (up > right) && (up > down)){
            x++;
            console.log("Down to Altitude: " + hills[x][y]);
            localPath.push("Down");
        }
        else if ((down > location) && (down > left) && (down > right) && (down > up)){
            x--;
            console.log("Up to Altitude: " + hills[x][y]);
            localPath.push("Up");
        }
        else {
            hilltop.push([hills[x][y]]);
            //console.log(x + " " + y);
            localMax = true;
        }
        directions(x, y);
        location = hills[x][y];
    }
    console.log("Found highest local peak: " + x + " " + y);
    if(localPath.length > 0)
        console.log("By climbing: " + localPath);
    console.log();
    localPath = [];
    up, right, left, down = 0;
}

hilltop.sort();
var highest = hilltop.pop();
console.log("Highest point found: " + highest);
