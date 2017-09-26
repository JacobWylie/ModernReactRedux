import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
	renderField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label>{field.label}</label>
				<input className="form-control"
					type="text"
					{...field.input}
				/>
				<div className="text-help">
					{touched ? error: ''}
				</div>
			</div>
		);
	}

	onSubmit(values) {
		console.log(values)
	}

	render() {
		const { handleSubmit } = this.props;


		return (
			<div>
				<h3>Add a New Blog Post</h3>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field
						label="Title of Post"
						name="title"
						component={this.renderField}
					/>
					<Field
						label="Categories"
						name="categories"
						component={this.renderField}
					/>
					<Field
						label="Post Content"
						name="content"
						component={this.renderField}
					/>

					<button type="submit" className="btn btn-sm btn-primary">Submit</button>
					<Link to='/' className='btn btn-sm btn-danger'>Cancel</Link>
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
		errors.content = "Enter some content";
	}

	// If errors is empty, the form is fine to submit
	// If errors has any properties redux form asumes form is invalid
	return errors;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(PostsNew);





















