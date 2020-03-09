// adding methods

let user = {
  // key value pair makes up one property of the object
  name: "crystal",
  age: 30,
  email: "crystal@thenetninja.co.uk",
  location: "berlin",
  blogs: ["Why mac & cheese rules", "10 things to make with marmite"],
  // adds a method called login where login is the key and the
  // function is the value
  login: function() {
    console.log("the user logged in");
  },
  logout: function() {
    console.log("the user logged out");
  }
  // need to use the this keyword to access the blogs values
  // logBlogs: function(){

  // }
};

user.login();
user.logout();

const name = "mario";
name.toUpperCase();
