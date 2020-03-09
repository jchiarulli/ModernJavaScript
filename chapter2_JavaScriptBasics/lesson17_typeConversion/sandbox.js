// type conversion
let score = "100";

//console.log(score + 1); // number is added onto the end of the string, i.e., "100" becomes "1001"

// //score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number("hello"); // gives NaN since "hello" is a string

// console.log(result);

// let result = String(50);
// console.log(result, typeof result);

let result = Boolean(100); // positive and negative numbers are considered true
result = Boolean(0); // 0 is considered false
result = Boolean("0"); // strings of any length are considered true
result = Boolean(""); // empty string considered false
console.log(result, typeof result);
