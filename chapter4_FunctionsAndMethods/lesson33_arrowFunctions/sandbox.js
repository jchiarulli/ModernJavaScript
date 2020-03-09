// returning values

// const speak = function(name = "luigi", time = "night") {
//   console.log(`good ${time} ${name}`);
// };

const calcArea = function(radius) {
  //let area = 3.14 * radius ** 2;
  //console.log(area);
  //return area;
  // don't need to store a local variable before
  // returning the value
  return 3.14 * radius ** 2;
};

// when a function returns a value we need to store it in a
// variable
const area = calcArea(5);

console.log(area);

// doesn't work since area is local to the function
//console.log(area);
