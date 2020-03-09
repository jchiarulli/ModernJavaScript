// function declaration
function greet() {
  console.log("hello there");
}

// function expression
// anytime you have a variable and set it equal to a function, string, a number, etc. that is known as an expression
// now the function is stored inside the variable speak
const speak = function() {
  console.log("good day!");
};

// calling or invoking the function
// greet();
// greet();
// greet();

speak();
speak();
speak();

// Note: this two different ways of creating functions behave the same way most of the time,
// but there is a difference when it comes to something called hoisting in JavaScript
// Note: hoisting loosely describes how the functions are effectively hoisted to the top of a file
// before the rest of the JavaScript actually runs
// Note: function declarations are hoisted at the top of the file before the rest of the file is run,
// but function expressions are not hoisted to the top of the file
// So, we could declare a function after calling the function and it would still run properly

bye();
bye();
bye();

function bye() {
  console.log("bye");
}

// Note: this does not work because JavaScript does not hoist function expressions
// hi();
// hi();
// hi();

// const hi = function() {
//   console.log("hi");
// };

// Note: good practive to use function expressions instead of function declaration
// because the code is easier to interpret
