let ninjas = ["shaun", "ryu", "chun-li"];

// ninjas[1] = "ken";
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ["shaun", "crystal", 30, 20];
// console.log(random);

//console.log(ninjas.length);

// array methods

//let result = ninjas.join(",");
//let result = ninjas.indexOf("chun-li");
//let result = ninjas.concat(["ken", "crystal"]);
let result = ninjas.push("ken"); // returns the new length of the array and alters the original array known as a destructive method
result = ninjas.pop(); // returns the value of the element that was popped off the array

console.log(result);
console.log(ninjas);
