import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUsers } from "../actions/userActions";
import { getPosts, deletePost } from "../actions/postActions";
import PostItem from "./PostItem";
import Spinner from "./Spinner";

import UserItem from "./UserItem";
import Header from "./Header";

const Users = (props) => {
  if (!props.users.length) {
    props.fetchUsers();
  }

  const history = useHistory();
  const toViewPosts = (userId) => {
    props.getPosts(userId);
  };
  const navigateTo = (url) => {
    history.push(url);
  };
  const newPost = () => {
    history.push(`/user/${props.posts.data[0].userId}`);
  };

  const renderPosts = (post) => {
    return (
      <PostItem
        key={post.id}
        post={post}
        deletePost={props.deletePost}
        navigateTo={navigateTo}
      />
    );
  };
  const renderCard = (user) => {
    return (
      <div className="item" key={user.id}>
        <UserItem user={user} toViewPosts={toViewPosts} />
      </div>
    );
  };

  return (
    <div className="ui two column grid">
      <div className="column">
        <div className="ui relaxed divided selection list">
          <Header title="Members" />
          {props.users.map(renderCard)}
        </div>
      </div>
      <div className="column">
          {props.posts.isLoading && props.posts.data.length > 0 && <Spinner /> }

          {props.posts.data.length === 0 && <Header title="Select User" />} 

          <div>
          {props.posts.data && !props.posts.isLoading  && <button className="ui button fluid large positive" onClick={newPost}>New Post</button> }

          </div>
          {props.posts.data.length > 0 && !props.posts.isLoading &&
            <div>
              <Header title='Posts' />
              <div className="ui segment divided selection list">
                {props.posts.data.map(renderPosts)}
              </div>
            </div>
          } 
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('posts', state)
  return { users: state.users, posts: state.posts };
};

export default connect(mapStateToProps, { fetchUsers, getPosts, deletePost
})(Users);
