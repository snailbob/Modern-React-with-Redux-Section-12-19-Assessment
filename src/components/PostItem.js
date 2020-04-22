import React from "react";

const PostItem = ({ post, deletePost, navigateTo }) => {
  return (
    <div className="item">
      <div className="content">
        <div className="header">{post.title}</div>
        <div className="description">
          <p>{post.body}</p>
        </div>
        <div className="ui buttons right floated">
          <button
            className="ui positive button"
            onClick={() => navigateTo(`/post/${post.userId}/${post.id}`)}
          >
            View
          </button>
          <button
            className="ui negative button"
            onClick={() => deletePost(post.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
