"use strict";

var location = "A"; //Initial Location
var status = "dirty"; //Initial environment floor status

var test = setInterval(myAgent, 3000); //Agent interval

function myAgent()
{
	var output = reflex(location, status);

	console.log(output);

	if (output == "Suck")
	{
		status = "Clean";
		output = reflex(location, status);
	}
	else
	{
		if(output == "Left"){
			location = "A";}
		else{
			location = "B";}

		var dirt = Math.floor(Math.random() * 2) + 1;
		if (dirt == 1){
			status = "Clean";}
		else{
			status = "dirty";}
		}
	}

function reflex(location, status){
	if (status == "dirty"){
		return "Suck";}
	else if (location == "A"){
		return "Right";}
	else if (location == "B"){
		return "Left";}
	}

