import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component
// Componenet should produce some HTML
const App = function() {
	return <div>Hello World!</div>
}

//Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));