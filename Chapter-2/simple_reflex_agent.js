"use strict";

var rules = [];

rules.push({roomState: ["A", "Dirty"], action: "Suck"});
rules.push({roomState: ["A", "Clean"], action: "Right"});
rules.push({roomState: ["B", "Clean"], action: "Left"});
rules.push({roomState: ["B", "Dirty"], action: "Suck"});
rules.push({roomState: [["A", "Clean"],["A", "Clean"]], action: "Right"});
rules.push({roomState: [["A", "Clean"],["A", "Dirty"]], action: "Suck"});


function searchRules(status){
	var x, i,j, y;
	
	for(i = 0; i < rules.length; i++){
		x = rules[i];

		//for(j = 0; j < x.roomState.length; j++)
			//console.log(x);
		if(x.roomState[0] === status.room && x.roomState[1] === status.state)
			return x.action;
	}

}

function agent(room, state){
	var status = {room: room, state: state};
	return searchRules(status);
}

console.log(agent("A", "Clean"));
console.log(agent("A", "Dirty"));
console.log(agent("B", "Clean"));
console.log(agent("B", "Dirty"));
//console.log(rules.length);
