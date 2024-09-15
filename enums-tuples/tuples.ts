/* Tuples  */


// A tuple works like an array with some additional considerations:

// 1.   The number of elements in the tuple is fixed.
// 2.   The types of elements are known, and need not be the same.

let skill: [string, number];
skill = ['Programming', 5];

console.log(skill);

// skill = ['Hello']; //error

// Optional tuple fields
let color: [number, number, number, number?]
color = [230, 45, 12];
console.log(color);

color = [234, 456, 12, 0.5];
console.log(color);



