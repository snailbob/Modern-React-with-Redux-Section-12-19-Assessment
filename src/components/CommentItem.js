import React from "react";

const CommentItem = ({ comment }) => {
  return (
    <div className="item">
        <div className="header">{comment.name}</div>
        <div className="meta">{comment.email}</div>
        <div className="description">{comment.body}</div>
    </div>
  );
};

export default CommentItem;
