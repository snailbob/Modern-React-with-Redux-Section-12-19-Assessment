import React from "react";

const UserItem = ({ user, toViewPosts }) => {
  return (
    <div className="item" onClick={() => toViewPosts(user.id)}>
          <div class="right floated content">
              <img
                className="ui mini circular right floated image"
                alt="avatar"
                src={user.avatar}
              />
          </div>
          <div class="content">
            <h3 className="ui header">{user.name}</h3>
            <div className="meta">{user.company.name}</div>
          </div>


    </div>
  );
};

export default UserItem;
