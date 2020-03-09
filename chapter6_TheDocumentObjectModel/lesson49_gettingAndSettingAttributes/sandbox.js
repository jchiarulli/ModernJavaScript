// getting and setting attributes

// href and class are some of the HTML attributes

// selects the first anchor tag, i.e., a in the HTML page
const link = document.querySelector("a");

// gets the value of the href attribute
console.log(link.getAttribute("href"));

// takes two arguments the first one is what attribute you want
// to change and the second attribute is what value you want to
// change it to
link.setAttribute("href", "https://www.thenetninja.co.uk");
link.innerHTML = "TheNet Ninja Website";

const mssg = document.querySelector("p");

console.log(mssg.getAttribute("class"));

// useful e.g., if we have a user that fills out some form and if
// there is an error we can change the class name to error and
// change the color to red for an error and green for success
mssg.setAttribute("class", "success");

// sets a new attribute in the HTML tag and gives it a value of
// green
// it doesn't matter if this attribute doesn't already exist it
// will create it
mssg.setAttribute("style", "color:green");
