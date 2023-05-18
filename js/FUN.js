setTimeout(function () {
    document.getElementById("heading").innerText = "Howdy!"; //accessing a single element by id, and changing the inner text!
    document.getElementById("heading").style.color = "firebrick"; // in the event of a duplicate id, only the first element is affected
}, 2000);

let listItems = document.getElementsByClassName("list-item"); // this will result in an HTMLCollection of all the elements with the class of "list-item"

console.log(listItems);

listItems.style = "background-color: yellow"; // This will not work, as HTMLCollections lack a style property

for (let i = 0; i < listItems.length; i++) {
    if (i % 2 === 0) {
        listItems[i].style = "background-color: yellow"; // this will work!
    } else {
        listItems[i].style = "background-color: steelblue; color: antiquewhite"; // changing multiple style properties!
    }
}

console.log(document.forms.login.username); // access the document, to access the forms, to access a form by its name, to access an input by its id.

document.forms.login.username.value = "BurgerKing"; // the value property can be used to change the value typed into a text input!

let lorem = document.getElementsByClassName("lorem");

for (let j = 0; j < lorem.length; j++) {
    lorem[j].innerHTML = "<h1>Howdy from JavaScript!</h1>"; // innerHTML can be used to insert HTML into our elements!
}

let h1s = document.getElementsByTagName("h1"); // this will result in an HTMLCollection of all the h1 elements.

console.log(h1s);

for (let l = 0; l < h1s.length; l++) {
    if (h1s[l].hasAttribute("class")) /* This will return a boolean on the existence of an attribute, in this case class */ {
        console.log(h1s[l].getAttribute("class")); // this will return the value assigned to an attribute
    } else {
        h1s[l].setAttribute("class", "special-guy"); // this will set the value of an attribute
    }
}

setTimeout(function() {
    for (let i = 0; i < h1s.length; i++) {
        h1s[i].removeAttribute("class"); // this will remove an attribute
    }
}, 5000);

// if we want to add or remove classes...
h1s[1].classList.add("special-dude");

h1s[1].classList.remove("special-guy");

// Creating an element
let myNewElement = document.createElement("h3");

console.log(myNewElement);

myNewElement.innerText = "I'm an h3 added via JavaScript!";

document.getElementById("html-here").innerHTML += "<p>I'm added to the HTML too!</p>";
document.getElementById("html-here").appendChild(myNewElement);

setTimeout(function () {
    document.getElementById("html-here").removeChild(myNewElement);
}, 8000)

