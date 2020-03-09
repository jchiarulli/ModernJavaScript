// object literals

let user = {
  // key value pair makes up one property of the object
  name: "crystal",
  age: 30,
  email: "crystal@thenetninja.co.uk",
  location: "berlin",
  blogs: ["Why mac & cheese rules", "10 things to make with marmite"]
};

//console.log(user);
//console.log(user.name);

//user.age = 35;
//console.log(user.age);

//console.log(user["name"]); // usefull if passing a variable
//console.log(user["email"]);

const key = "location";
console.log(user[key]); // advantage of using square brackets
console.log(user.key); // undefined since key is not a property

user["name"] = "chun-li";
//console.log(user["name"]);

console.log(typeof user);
