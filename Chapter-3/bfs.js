"use strict";

function SimpleGraph() {
    this.edges = {};

    this.neighbors = function(id) {
        return this.edges[id];
    };

}

function Queue() {
	this.elements = [];

	this.empty = function(){
		return this.elements.length === 0;
	}

	this.put = function(x){
		return this.elements.push(x);
	}

	this.get = function(){
		return this.elements.shift();
	}
}

function breadth_first_search_1(graph, start, end){
	var frontier = new Queue;
		frontier.put(start);
	var visited = {};
		visited[start] = true;
		var current, next, i;
		

	while(!frontier.empty()){
		current = frontier.get();
		console.log("Visiting: " + current);

		if(current === end){
			console.log("Found end node: " + current);
			break;
		}

		for(i = 0; i < graph.neighbors(current).length; i++){
			next = graph.neighbors(current)[i];
			console.log("Node " + current + " neighbors: " + next);
			//console.log(graph.neighbors(current).length);
			
			if(!visited[next])
			{
				frontier.put(next);
				visited[next] = true;
			}
		}
	}
}

var example_graph = new SimpleGraph();
example_graph.edges = {
	'A': ['B'],
    'B': ['A', 'C', 'D'],
    'C': ['A'],
    'D': ['E', 'A'],
    'E': ['B']
}

console.log("Enter starting node: ");

breadth_first_search_1(example_graph, 'A', 'D');


