"use strict";

function percept(room, state){
	var percept = {room: room, state: state};
	return percept;
}

function agent(percept){
	var action = agentAction(percept);
	return action;
}

function agentAction(percept){
	var action = "Invalid percept received";
	if(percept.room === "A")
		action = (percept.state === "Clean") ? "Right":"Suck";
	else if (percept.room === "B")
		action = (percept.state === "Clean") ? "Left": "Suck";
	return action;
}

console.log(agent(percept("A","Clean")));
console.log(agent(percept("A","Dirty")));
console.log(agent(percept("B","Clean")));
console.log(agent(percept("B","Dirty")));
console.log(agent(percept("C","Clean")));