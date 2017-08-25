import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
// const API_KEY = process.env.API_KEY;
const API_KEY = 'AIzaSyB2tVLl0U8zOhG3FBgO60MQPRkdfb3mbU4';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] }

		// Make an API call to search YouTube
		YTSearch({key: API_KEY, term: "dogs"}, videos => {
			//es6 same key:value name typed as one word ie. {videos; videos} 
			this.setState({ videos })
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList  videos={this.state.videos} />
			</div>
		);
	}
}

//Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));