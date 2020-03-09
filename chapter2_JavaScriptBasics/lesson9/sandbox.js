// strings
console.log("hello, world");

let email = "chiarulli2@gmail.com";
console.log(email);

// string concatenation
let firstName = "Brandon";
let lastName = "Sanderson";

let fullName = firstName + " " + lastName;
console.log(fullName);

// getting characters
console.log(fullName[2]);

// string length
console.log(fullName.length); // just a property of the string

// string methods
console.log(fullName.toUpperCase()); // this is a method
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf("@"); // passing an argument to a method
console.log("index of the @ sign:", index);
