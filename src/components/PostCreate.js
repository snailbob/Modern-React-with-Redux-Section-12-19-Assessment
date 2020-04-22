import React from "react";
import { Field, reduxForm, reset } from "redux-form";

const onSubmitSuccess = (result, dispatch) => dispatch(reset("newPost"));

const PostCreate = (props) => {
  const { handleSubmit } = props;
  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Title</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div className="field">
        <label htmlFor="body">Body</label>
        <Field name="body" component="input" type="text" />
      </div>
      <button className="ui positive fluid button" type="submit">
        Create New Post
      </button>
    </form>
  );
};

export default reduxForm({
  form: "newPost",
  onSubmitSuccess,
})(PostCreate);
