import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
	renderField(field) {
		return (
			<div className="form-group">
				<label>{field.label}</label>
				<input className="form-control"
					type="text"
					{...field.input}
				/>
			</div>
		);
	}

	render() {
		return (
			<div>
				<h3>Add a New Blog Post</h3>
				<form>
					<Field
						label="Title of Post"
						name="title"
						component={this.renderField}
					/>
					<Field
						label="Categories"
						name="Categories"
						component={this.renderField}
					/>
					<Field
						label="Post Content"
						name="content"
						component={this.renderField}
					/>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	// Validate the inputs from 'values'
	if(!values.title) {
		errors.title = "Enter a title";
	}

	if(!values.categories) {
		errors.categories = "Enter some categories";
	}

	if(!values.content) {
		errors.content = "Enter some content please";
	}

	// If errors is empty, the form is fine to submit
	// If errors has any properties redux form asumes form is invalid
	return errors;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(PostsNew);





















