import _ 					from 'lodash';
import React, { Component } from 'react';
import ReactDOM 			from 'react-dom';
import YTSearch 			from 'youtube-api-search';
import SearchBar 			from './components/search_bar';
import VideoList 			from './components/video_list';
import VideoDetail 			from './components/video_detail';
// const API_KEY = process.env.API_KEY;
const API_KEY = 'AIzaSyB2tVLl0U8zOhG3FBgO60MQPRkdfb3mbU4';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('javascript');
	}

	videoSearch(term) {
		// Make an API call to search YouTube
		YTSearch({key: API_KEY, term: term}, videos => {
			//es6 same key:value name typed as one word ie. {videos; videos} 
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			 })
		});
	}

	render() {
		const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList  
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}

//Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));