// arguments & parameters

// creates a local variable name that can be used inside the code
// block of the function
// name and time are funciton parameters
// luigi and night are called default parameters in the case speak
// is called without any arguments
const speak = function(name = "luigi", time = "night") {
  console.log(`good ${time} ${name}`);
};

console.log(name); // outputs and empty string

// when we pass in a value to a function it is known as an
// argument
// Note: the order of the arguments matters
speak("mario", "morning");
speak();
speak("shaun"); // the second argument takes on the default value
