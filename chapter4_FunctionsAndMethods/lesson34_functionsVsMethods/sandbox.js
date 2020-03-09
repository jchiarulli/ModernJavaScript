// functions vs methods

const name = "shaun";

// functions
const greet = () => "hello";

// how we call or invoke functions
// we invoke the function directly using the function name and
// parenthesis
let resultOne = greet();
console.log(resultOne);

// methods

// methods are invoked using dot notation
// call the method on the back of a variable using dot notation
let resultTwo = name.toUpperCase();
console.log(resultTwo);

// methods are functions but they are functions that are
// associated with an object, e.g, a data type like a string
// methods are defined on an object or a data type, but functions
// are defined on their own not on an object or a data type
