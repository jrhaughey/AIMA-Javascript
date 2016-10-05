"use strict";
/*
https://www.npmjs.com/package/datastructures-js
*/

function SimpleGraph() {
    this.edges = {};

    this.neighbors = function(id) {
        return this.edges[id];
    };

    this.cost = function(from, to){
        return 1;
    }
}

var ds = require("datastructures-js");

var heuristic = function(a, b){
	var x1, x2, y1, y2;
	var result = 0;
	x1 = a[0];
	y1 = a[1];
	x2 = b[0];
	y2 = b[1];
    result = Math.abs(x1 - x2) + Math.abs(y1 - y2);
    //return result;
    return 1;
}

var a_star = function(graph, start, goal){
    var frontier = ds.priorityQueue();// initially empty 
	frontier.enqueue(start, 0);
	var came_from = [];
	var cost_so_far = [];
	var i;
	var current, next, priority, new_cost;
    console.log("Start: " + start);
	came_from[start] = 0;
	cost_so_far[start] = 0;

	while(!frontier.isEmpty()){
        current = frontier.dequeue()
        if (current == goal)
            break;
        console.log("Searching: " + current);
        for(i = 0; i < graph.neighbors(current).length; i++)
        {
            next = graph.neighbors(current)[i];
            new_cost = cost_so_far[current] + graph.cost(current, next);
            if (!(next in cost_so_far) || (new_cost < cost_so_far[next])){
                cost_so_far[next] = new_cost;
                priority = new_cost + heuristic(goal, next);
                frontier.enqueue(next, priority);
                came_from[next] = current;
                //console.log(new_cost);
            }
    	}	
	}
    return came_from, cost_so_far;
}

var example_graph = new SimpleGraph();
example_graph.edges = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'D': ['B'],
    'K': ['E', 'Q'],
    'F': ['C'],
    'C': ['F', 'G'],
    'E': ['J', 'K'],
    'G': ['H', 'I'],
    'J': ['L', 'I'],
    'I': ['G', 'J'],
    'H': ['G', 'L'],
    'L': ['Q', 'R']
}

var x = a_star(example_graph, 'A', 'L');
console.log(x);
