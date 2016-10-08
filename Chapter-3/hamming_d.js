"use strict";

var solution = ['Blank','1','2','3','4','5','6','7','8'];

var state  = ['Blank', '2','1','3','4','5','6','7','8'];

var state  = ['Blank', '2','1','3','4','5','6','8','7'];

var hamming = function (array1, array2)
{
	var i = 0;
	var count = 0;
	for(i; i < array1.length; i++){
		if(array1[i] != array2[i])
			count++;
	}
	return count;
}

console.log("Hamming distance for array1: " + solution);
console.log("and array2 " + state);
console.log(hamming(solution, state));

console.log("Hamming distance for array1: " + solution);
console.log("and array2 " + state1);
console.log(hamming(solution, state1));
