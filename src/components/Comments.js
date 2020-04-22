import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions/postActions";
import { getComments } from "../actions/commentActions";
import CommentItem from "./CommentItem";
import Spinner from "./Spinner";
import BackBtn from "./BackBtn";

const Comments = (props) => {
  const { postId, getComments, getPosts, comments, post, userId } = props;
  useEffect(() => {
    post && getComments(postId);
    !post && getPosts(userId);
  }, [getComments, postId, getPosts, userId, post]);

  if (comments.isLoading) {
    return <Spinner />;
  }

  if (!post) return null;

  const renderCard = (comment) => {
    return <CommentItem comment={comment} key={comment.id} />;
  };

  return (
    <div>
      <BackBtn />
      <h3 className="ui header">
        {post.title}
      </h3>
      <p>{post.body}</p>

      <h4>Comments ({comments.data.length})</h4>
      <div className="ui segment divided selection list">
        {comments.data.map(renderCard)}
      </div>
    </div>
  );
};

const mapStateToProps = ({ comments, posts }, { match }) => {
  const postId = Number(match.params.postId);
  const userId = Number(match.params.userId);
  const post = posts.data.find((post) => post.id === postId);
  return { comments, postId, post, userId };
};

export default connect(mapStateToProps, {
  getComments,
  getPosts,
})(Comments);
