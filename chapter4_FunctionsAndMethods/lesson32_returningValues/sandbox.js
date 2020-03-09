//regular function
// const calcArea = function(radius) {
//   return 3.14 * radius ** 2;
// };

// arrow function (shorthand way of writing functions)
// Note: when we have only one parameter we can remove the
// paranthesis, but if we have more than one parameter or no
// parameters the paranthesis must remain
// const calcArea = radius => {
//   return 3.14 * radius ** 2;
// };

// when we have just a single return like in the function above
// we can write the function as follows:
const calcArea = radius => 3.14 * radius ** 2;

const area = calcArea(5);
console.log("area is: ", area);

// Note: a major difference between a regular function and an
// arrow function has to do with the binding of the this keyword,
// so there are times when arrow functions shouldn't necessarily
// be used

// practice arrow functions

// const greet = function() {
//   return "hello, world";
// };

// const greet = () => {
//   return "hello, world";
// };

// const result = greet();
// console.log(result);

// or we can write the function like this
const greet = () => "hello, world";

const result = greet();
console.log(result);

// const bill = function(products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// console.log(bill([10, 15, 30], 0.2));

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([10, 15, 30], 0.2));
