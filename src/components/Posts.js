import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts, deletePost, addPost } from "../actions/postActions";
import { fetchUsers } from "../actions/userActions";
import Header from "./Header";
import BackBtn from "./BackBtn";
import PostCreate from "./PostCreate";
import Spinner from "./Spinner";

const Posts = (props) => {
  const {
    user,
    userId,
    fetchUsers,
    getPosts,
    posts,
    addPost,
  } = props;

  useEffect(() => {
    getPosts(userId);
  }, [getPosts, userId]);

  if (posts.isLoading) {
    return <Spinner />;
  }

  if (!user) {
    fetchUsers(userId);
    return null;
  }

  const newPost = (post) => {
    addPost(userId, post.title, post.body);
  };

  return (
    <div className="ui relaxed divided list">
      <BackBtn />
      <Header title={user.name + " Posts"} />
      <PostCreate onSubmit={newPost} />
    </div>
  );
};

const mapStateToProps = ({ posts, users }, { match }) => {
  const userId = Number(match.params.userId);
  const user = users.find((user) => user.id === userId);
  return { posts, userId, user };
};

export default connect(mapStateToProps, {
  getPosts,
  fetchUsers,
  deletePost,
  addPost,
})(Posts);
