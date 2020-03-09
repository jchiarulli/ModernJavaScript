// adding and changing page content

const para = document.querySelector("p");

// property name so we don't need () like we do with a method
// console.log(para.innerText);

// para.innerText = "ninjas are awesome!";
// console.log(para.innerText);

// append to the text
// para.innerText += " ninjas are awesome!";

const paras = document.querySelectorAll("p");

// paras.forEach(para => {
//   console.log(para.innerText);
//   para.innerText += " new text";
// });

const content = document.querySelector(".content");

// grabs the HTML content inside of the tags with the class name
// content
// console.log(content.innerHTML);

// replaces the p tag and its content with the h2 tag and its
// content
// content.innerHTML = "<h2>THIS IS A NEW H2</h2>";

// appends the h2 tag and its content
// content.innerHTML += "<h2>THIS IS A NEW H2</h2>";

const people = ["mario", "luigi", "yoshi"];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
});
