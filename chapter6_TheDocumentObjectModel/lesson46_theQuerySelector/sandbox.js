// the query selector

// reaching in and selecting elements in the DOM is known as
// querying the DOM

// reach in, grab elements, create a reference

// the next step is to change some element/node in the DOM

// const para = document.querySelector("p"); // grabs the first p tag
// console.log(para);

// .className selects the tag in the DOM that has the class name
// grabs the first tag with that class name
// const paraClass = document.querySelector(".error");
// console.log(paraClass);

// grabs the tag that is a div with the class error
// const divClassError = document.querySelector("div.error");
// console.log(divClassError);

// go to DOM right click an element then right click a tag then
// choose copy CSS selector to get a unique tag identifier

// const grabh1Tag = document.querySelector("body > h1:nth-child(1)");
// console.log(grabh1Tag);

// grabs a reference to all p tags in the document and stores
// them as a collection in the paras constant
const paras = document.querySelectorAll("p");
console.log(paras);

// NodeList is not actually an array can be accessed like one
// NodeList is basically a group of nodes or a group of elements
// console.log(paras[0]);
// console.log(paras[1]);
// console.log(paras[2]);

// paras.forEach(para => {
//   console.log(para);
// });

// grabs a reference to all tags with the class error
const errors = document.querySelectorAll(".error");
console.log(errors);
