import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		if(!this.props.book) {
			return <div>Select a book to get started.</div>
		}

		return (
			<div className="col-sm-8">
				<h3>Details for book:</h3>
				<div><h5>Title:</h5> {this.props.book.title}</div>
				<div><h5>Pages:</h5> {this.props.book.pages}</div>
				<div><h5>Synopsis:</h5> {this.props.book.synopsis}</div> 
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);