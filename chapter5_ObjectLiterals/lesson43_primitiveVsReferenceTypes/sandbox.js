// primmitive vs reference types

// Primitive Types: numbers, strings, Booleans, null, undefined,
// symbols

// Reference Types (all types of objects): object literals,
// arrays, functions, dates, all other objects

// the difference between primitive and reference types is how
// they are stored and used in memory

// when we create a primitive type that value is stored onto a
// stack which is basically jsut a stack of different values in
// memory

// the values can be accessed pretty quickly but the space
// inside of the stack is quite limited, so when we create some
// reference type like an object literal it is stored on the
// heap

// the heap has more space available so it can hold larger and
// more complex types, but it is slower

// two different types of mempry for two different things

// Why is this important?
// When we store a primitive value in a variable it adds that
// value to the stack and it locks the variable name to it as an
// accessor for that value
// When we store a reference type in a variable like an object it
// adds it to the heap and it adds a pointer to the object on the
// stack
// e.g., if we create an array it is added to the heap and the
// array is stored in a variable and it adds a pointer to the
// array in the stack and it locks the variable name to the
// pointer, so when we acccess the variable name it knows to get
// the pointer which points to the array in the heap and it grabs
// the array
// if we create a primitive type its value and name gets stored on
// the stack, so if we make a copy by setting a variable to the
// previously defined variable it creates a copy of the value and
// it stores that variable separately on the stack, i.e., we have
// two the same two values on the stack and two different variable
// names lock into the values
// so if we update the value of the first variable it just updates
// the value of the first variable on the stack it doesn't affect
// the value of the second variable
// What if we do this with reference types, i.e., we create an
// object called userOne then that object is stored on the heap
// and a pointer to that object is created on the stack and the
// variable name userOne is locked into that pointer, so if we
// want to access userOne it finds its pointer on the stack and
// points to the value(s) of userOne found on the heap
// now if we create a copy of userOne by setting userTwo = userOne
// then it doesn't create a new object in the heap instead it
// copys the pointer on the stack and we have the new variable
// name userTwo locked to the new pointer
// so they both point to the same object on the heap
// so if we update the userOne object by updating one of its
// properties say score from 100 to 50 then the updaated object
// is stored on the heap so if access userOne it gets its pointer
// on the stack and points to the object on the heap which returns
// the updated value(s) and if we access userTwo it gets its
// pointer which points to the same object as userOne in the heap,
// so when we update userOne it also updates userTwo

// primitive types

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

const userOne = { name: "ryu", age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

// this value is changed on the heap and both objects have
// pointers on the stack that point to the same object so
// updating the value of one object's properties updates the
// value of both objects' properties
userOne.age = 40;
console.log(userOne, userTwo);

userOne.name = "chun-li";
console.log(userOne, userTwo);
