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

// Here we are using JSX instead of React.createElement

// The flow
// 1. We write JSX which is HTML like syntax but not HTML. It's a convinient way creating React elements.
// 2. The JSX gets transpiled into React.createElement syntax by Babel.
// 3. Then the React code gets executed and become React Object.
// 4. Using ReactDOM we render the React object which gets converted to DOM elements.

const jsxHeading = <h1 id='heading' xyz='xyz'>Hello World From React!!!</h1>


// creating functional components
// functional components returns JSX(React Elements)
// functional components should start with UpperCase letter
const TitleComp = ()=> {
    return <h1>This is title</h1>
}


// Nesting functional components within another functional component(Component Composition)
const HeadingComp = ()=> {
    return (
        <div>
            {TitleComp()}
            <h2>This is the description</h2>
        </div>
    )
}

// Rendering functional components
root.render(<HeadingComp/>)