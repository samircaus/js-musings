//'use strict';
const strConstant = 'Constant'; // Is immutable
const numConstant = 4; // is immutable
const functionConstant = x => x; // Shallow Immutability (internal properties can still be changed)
const functionWithProt = function(x) {
  return x;
};
const arrayConstant = [1, 2, 3]; // Shallow Immutability (can still receive new items or get items removed, etc.)
const objConstant = { a: 1, b: 2 }; // Shallow Immutability (internal properties can still be changed, added)

// Enums = Objects in javascript.

// Freezable objects

const freezedObj = Object.freeze({ a: 1, b: 2 });

freezedObj.a = 4; // Will silently fail on normal mode. TypeError on strict mode.

// Functions and Arrow Functions

functionConstant.prototype; // Undefined
functionWithProt.prototype; // functionWithProt {}
