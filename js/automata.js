"use strict";

function automata(automataDescriptor) {
	// automata components
	// Hard-coded example
	// var alphabet = ['0', '1'],
	// 	states = ['1', '2', '3'],
	// 	initialState = '1',
	// 	finalStates = ['2'],
	// 	transitions = [
	// 		{
	// 			state: '1',
	// 			symbol: '0',
	// 			nextState: '1'
	// 		},
	// 		{
	// 			state: '1',
	// 			symbol: '1',
	// 			nextState: '2'
	// 		},
	// 		{
	// 			state: '2',
	// 			symbol: '1',
	// 			nextState: '2'
	// 		},
	// 		{
	// 			state: '2',
	// 			symbol: '0',
	// 			nextState: '3'
	// 		},
	// 		{
	// 			state: '3',
	// 			symbol: '0',
	// 			nextState: '2'
	// 		},
	// 		{
	// 			state: '3',
	// 			symbol: '1',
	// 			nextState: '2'
	// 		}
	// 	];

	var alphabet = [], states = [], initialState, finalStates = [], transitions = []; 

	if(automataDescriptor !== undefined) {
		alphabet = automataDescriptor.alphabet;
		states = automataDescriptor.states;
		initialState = automataDescriptor.initialState;
		finalStates = automataDescriptor.finalStates;
		transitions = automataDescriptor.transitions;
	}
		// Public API of the automata
		return {
			setAlphabet: function(a) {
				// TODO: validate input (check if a is an array of strings)
				alphabet = a;
			},
			getAlphabet: function() {
				return alphabet;
			},
			addSymbol: function(sym) {
				// TODO: check if sym is a string
				alphabet.push(sym);
			},
			setStates: function(s) {
				// TODO: validate input (check if is an array of strings)
				states = s;
			},
			getStates: function() {
				return states;
			},
			addState: function(s) {
				// TODO: check if s is a string
				states.push(s);
			},
			setInitialState: function(s) {
				// TODO: validate input
				initialState = s;
			},
			getInitialState: function() {
				return initialState;
			},
			setFinalStates: function(s) {
				// TODO: validate input (check if is an array of strings an sub set of states)
				finalStates = s;
			},
			addFinalState: function(s) {
				// TODO: check if s is a string and belongs to states set
				finalStates.push(s);
			},
			setTransitions: function(t) {
				transitions = t;
			},
			compute: function(word) {
				// TODO: verify if word is composed of valid symbols
				console.log('Initial state is', initialState);
				var currentState = initialState;

				// Iterate through the characters in word
				for(char of word) {
					console.log('Processing symbol', char);
					var transitionCounter = 0;
					// Retrieve current state and current symbol. Find matching transition. Update current state. Repeat with next symbol
					for(t of transitions) {
						console.log('Evaluating transition');
						console.log(t);
						if(t.state === currentState && t.symbol === char) {
							console.log('Transition hit');
							currentState = t.nextState;
							console.log('Current state is now', currentState);
							break;
						} else transitionCounter++;
					}
					if(transitionCounter === transitions.length) {
						console.log('No Valid transition found');
						return false; // Dead end
					}
				}
				
				if(finalStates.includes(currentState))
					return true;
				return false;
			}
		}	
}