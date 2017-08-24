import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = process.env.API_KEY;


// Create a new component
// Componenet should produce some HTML
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

//Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));