"use strict";

function SimpleGraph() {
    this.edges = {};

    this.neighbors = function(id) {
        return this.edges[id];
    };

}

function Stack() {
	this.elements = [];

	this.empty = function(){
		return this.elements.length === 0;
	}

	this.put = function(x){
		return this.elements.unshift(x);
	}

	this.get = function(){

		return this.elements.shift();
	}
}

function depth_first_search_1(graph, start, end){
	var frontier = new Stack;
		frontier.put(start);
	var visited = [];
	var current, next, i;
	
	while(!frontier.empty())
	{
		current = frontier.get();
		console.log(current);
		if(visited.indexOf(current) > 0){
			console.log("Already found: " + current);
			continue;
		}
		else
		{			
			visited.push(current);
			for(i in graph.neighbors(current)){
				//console.log(next);
				next = graph.neighbors(current)[i];
				frontier.put(next);
			}
			console.log(frontier.elements)
		}
	}
	console.log(visited);
}

var example_graph = new SimpleGraph();
example_graph.edges = {
	'A': ['B', 'C'],
    'B': ['E', 'J'],
    'C': ['F'],
    'F': ['H'],
    'J': ['K'],
    'K': ['L']
    //'E': ['F']
}

//console.log(example_graph.neighbors('A').length);

depth_first_search_1(example_graph, 'A', 'H');


