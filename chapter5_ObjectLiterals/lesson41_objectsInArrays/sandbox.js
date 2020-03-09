// objects in arrays

// common format when retrieving data
// const blogs = [
//   { title: "Why mac & cheese rules", likes: 30 },
//   { title: "10 things to make with marmite", likes: 50 }
// ];

// console.log(blogs);

let user = {
  // key value pair makes up one property of the object
  name: "crystal",
  age: 30,
  email: "crystal@thenetninja.co.uk",
  location: "berlin",
  blogs: [
    { title: "Why mac & cheese rules", likes: 30 },
    { title: "10 things to make with marmite", likes: 50 }
  ],
  // adds a method called login where login is the key and the
  // function is the value
  login() {
    console.log("the user logged in");
  },
  logout() {
    console.log("the user logged out");
  },
  // need to use the this keyword to access the blogs values
  logBlogs() {
    // console.log(this.blogs)
    console.log("this user has written the following blogs:");
    this.blogs.forEach(blog => {
      console.log(blog.title, blog.likes);
    });
  }
};

user.logBlogs();
