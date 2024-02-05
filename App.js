import React from "react";
import ReactDOM from "react-dom/client";

// creating react element(which is an object)
// first argument is the tag type, second argument is the attributes
// of the element and the third argument is the content/children of the element
const heading = React.createElement('h1', {id: 'heading', xyz:'xyz'}, "Hello World From React!");


// creating root element for react
// Within the root the whole react elements are rendered
// here it is wrapped outside the div element with id root
// This is a property of ReactDOM not React
const root = ReactDOM.createRoot(document.getElementById('root'));


// root render takes all the react object and connverts them to html
// element and create the dom tree
// root.render(heading);



// creating child1
const child1 = React.createElement('div', {id: 'child1'}, "This is child 1")

// creating child2
const child2 = React.createElement('div', {id: 'child2'}, "This is child 2");

// creating an element parent with two sibiling elements child1,child2
// to create sibling element we need to pass it in array
const parent = React.createElement('div', {id: 'parent'}, [child1, child2])


root.render(parent)