import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>
				<h1>React Blog App</h1>
			</div>
		);
	}
}

export default connect(null, { fetchPosts })(PostsIndex);
