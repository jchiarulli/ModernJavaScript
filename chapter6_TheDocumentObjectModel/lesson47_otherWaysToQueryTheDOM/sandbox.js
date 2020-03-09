// other ways to query the DOM

// get an element by ID

// shouldn't have the same ID for more than one element in an
// HTML page
// don't need the # like when doing a query selector because
// it is implied by the method
const title = document.getElementById("page-title");
console.log(title);

// get elements by their class name

// don't need the . like when doing a query selector because
// it is implied by the method
// gives us an HTML Collection which is similar to but different
// than a NodesList
const errors = document.getElementsByClassName("error");
console.log(errors);

console.log(errors[0]);
console.log(errors[1]);

// can't use forEach on an HTML Collection
// errors.forEach(error => {
//   console.log(error);
// });

// get elements by their tag name

// grabs all of the p tags on the HTML page and stores them in an
// HTML Collection
const paras = document.getElementsByTagName("p");
console.log(paras);

console.log(paras[0]);

// have to convert HTML Collections to arrays before being able
// to use the forEach method on them
