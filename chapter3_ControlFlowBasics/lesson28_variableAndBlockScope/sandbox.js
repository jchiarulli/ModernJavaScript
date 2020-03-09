// variables & block scope

let age = 30; // global scope since it is in the root of the doc
//let age = 50; // error since age has already been declared in the same scope

if (true) {
  //age = 20; // this refers to the global variable for age that has already been defined, so it will change the value of age globally
  //console.log("inside code block ", age);

  // this only creates a local scope for age inside this code block, so outside age still refers to age with global scope
  let age = 40; // no error since we can redefine a variable inside a code block
  let name = "shaun"; // local scope
  console.log("inside code block: ", age, name);

  if (true) {
    let age = 50;
    console.log("inside 2nd code block: ", age); // takes the most recently defined value for age, so the value whose scoope is closest outside of this code block
    var test = "hello";
  }
}

// name is defined in the local scope of the code block, so an empty string is outputted for name here
console.log("outside code block: ", age, name, test); // we can access the value for test since it is defined with var which ignores block scope

// Note: the same rules for scope also apply to conse values, so if we changed each let to const above we would get the same output
// Note: var ignores block scope
// Note: block scope is one of the main advantages of using let and const instead of var since it is usefule to define variables with local scope
