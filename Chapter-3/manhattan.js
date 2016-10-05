"use strict";

/*In both examples, tile 3 and 4 have been swapped,
  causing a distance of 6.
  |---|---|---|
  | 1 | 2 | 3 |
  |---|---|---|
  | 4 | 5 | 6 |
  |---|---|---|
  | 7 | 8 | 0 |
  |---|---|---|

  |---|---|---|
  | 1 | 2 | 4 |
  |---|---|---|
  | 3 | 5 | 6 |
  |---|---|---|
  | 7 | 8 | 0 |
  |---|---|---|
*/
var solution = ['1','2','3','4','5','6','7','8','0'];
var state  = ['1','2','4','3','5','6','7','8','0'];

//Array elements contain [Tile#, #inTile]
var solution1 = [['1', '0'],['2','1'],['3','2'],['4','3'],['5','4'],['6','5'],['7','6'],['8','7'],['0','8']];
var state1 =    [['1', '0'],['2','1'],['3','3'],['4','2'],['5','4'],['6','5'],['7','6'],['8','7'],['0','8']];


//Array below was used to test invalid lengths
//var state  = ['2','3','4','5','6','7','8','1'];

var manhattan = function (solution, state)
{
	var i = 0;
	var count = 0;
	
	if(solution.length != state.length)
		return 'Invalid array length. Exiting.';

	for(i; i < solution.length; i++){
			count = count + manhattanDistance(i, gridLoc(solution, state[i]));
	}

	return count;
}

var gridLoc = function(solution, loc)
{
	var i = 0;
	for(i; i < solution.length; i++)
		if(solution[i] === loc)
			return i;
}

var manhattanDistance = function(tile1, tile2){
	var x = 0;
	//console.log(tile1 + " " + tile2);
	x = Math.abs(Math.floor(tile1/3) - Math.floor(tile2/3)) +
	Math.abs(tile1%3 - tile2%3);

	//console.log("Count is: " + x);
	return x;
}

var manhattan2 = function(solution1, state1){
	var i = 0;
	var count = 0;
	
	if(solution.length != state.length)
		return 'Invalid array length. Exiting.';

	for(i; i < solution.length; i++){
			count = count + manhattanDistance(solution1[i][1], state1[i][1]);
	}

	return count;
}

console.log(manhattan(solution, state));

console.log(manhattan2(solution1, state1));