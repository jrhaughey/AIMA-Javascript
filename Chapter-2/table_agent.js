"use strict";

var actionTable = [];
var percepts = [];
var perceptHistory = [];

actionTable.push(percept("A", "Clean", "Right"));
actionTable.push(percept("A", "Dirty", "Suck"));
actionTable.push(percept("B", "Clean", "Left"));
actionTable.push(percept("B", "Dirty", "Suck"));


function percept(room, state, action){
	var percept = {room: room, state: state, action: action};
	return percept;
}

function searchTable(room, state){
	var i, x;

	for(i = 0; i < actionTable.length; i++)
	{
		x = actionTable[i];
		if(x.room === room && x.state === state)
		{
			return x.action;
		}
	}
	return "No match found in table.";
}

function agent(room, state){
	perceptHistory.push([room, state]);
	return searchTable(room, state);
}

console.log(agent("A", "Clean"));
console.log(agent("A", "Dirty"));
console.log(agent("B", "Clean"));
console.log(agent("B", "Dirty"));
console.log(agent("C", "Clean"));