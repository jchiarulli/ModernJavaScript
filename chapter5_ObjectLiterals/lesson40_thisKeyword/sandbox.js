// this keyword

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
  },
  // need to use the this keyword to access the blogs values
  // need to be able to access the blogs property inside
  // this method
  logBlogs: function() {
    // results in an undefined value when the method is called
    // console.log(blogs);

    // this refers to this user object, so we can say:
    // this.blogs

    // the this keyword is a context object and it represents the
    // context in which the current code is executing, so
    // depending on how and where we use it its value is going to
    // be different

    // this refers to the user object since it is being used
    // inside of the user object
    // displays the user object
    console.log(this);

    // allows us to access the user property blogs
    console.log(this.blogs);

    console.log("this user has written the following blogs: ");
    // Note: forEach method takes a callbackfn as input
    // output each value in the blog array and is being accessed
    // using the this keyword
    this.blogs.forEach(blog => {
      console.log(blog);
    });
  },
  // used a regular function instead of an arrow function to
  // define the funciton because arrow functions work differntly
  // with the this keyword
  // the this keyword will not work as expected
  // when we use a regular function as a method and invoke that
  // method javascript sets the value of the this keyword to be
  // the object that the method was used on, so inside the
  // regular function we can use the this keyword to refer to
  // the object itself

  // when we use an arrow function to create the method
  // javascript will now not set the value of the this keyword
  // to be the object, i.e., user
  // the value of the this keyword does not change from the
  // value it was at the point in the code where the arrow
  // function was invoked
  logBlogsUsingArrow: () => {
    console.log("this user has written the following blogs: ");
    this.blogs.forEach(blog => {
      console.log(blog);
    });
    console.log(this);
  },
  // easier way to wirite the methods as regular functions
  logBlogsEasierWay() {
    console.log("this user has written the following blogs: ");
    this.blogs.forEach(blog => {
      console.log(blog);
    });
  }
};

// undefined since we are not accessing blogs properly
//user.logBlogs();

// if we use the this keyword inside the root of the document
// then it is going to refer to the global context which is
// called the window object
console.log(this);

// when we call a method like this javascript sets the value of
// the this keyword to be the object the method was used on
user.logBlogs();

// when we invoke the method the value of the this keyword is the
// global window object and we cannot use a blogs propety on the
// window object
// causes a TypeError
// javascript does not change the current value of the this
// keyword when invoking a method that is created using an arrow
// function
//user.logBlogsUsingArrow();

// if we invoke the method when not attempting to use the blog
// property and console.log(this) we will get the global window
// object as output
//user.logBlogsUsingArrow();

user.logBlogsEasierWay();
