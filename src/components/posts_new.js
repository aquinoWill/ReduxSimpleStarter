import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderTitleField(field) {
    return (
      <div className="form-group">
        <label>{ field.label }</label>
        <input
          className="form-control"
          type="text"
          { ...field.input }
        />
        {field.meta.error}
      </div>
    );
  }

  sendForm(value) {
    console.log(value);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={ handleSubmit(this.sendForm.bind(this)) }>
          <Field
            label="Title for Post"
            name="title"
            component={this.renderTitleField}
          />

          <Field
            label="Categories"
            name="categories"
            component={this.renderTitleField}
          />

          <Field
            label="Post Content"
            name="content"
            component={this.renderTitleField}
          />

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {}

  if(!values.title) {
    errors.title = "Enter a title";
  }

  if(!values.categories) {
    errors.categories = "Enter some categories";
  }

  if(!values.content) {
    errors.content = "Enter some content";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
