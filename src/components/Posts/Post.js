import React from "react";

import "./Post.css";

const Post = (props) => {
  const date = new Date();

  return (

      <div className="post-item">
        <div>{date.toISOString()}</div>
        <div>{props}</div>
        <div></div>
        <div className="post-item__description"></div>
        <h2>Post title</h2>
        <div className="post-item__price">222</div>
      </div>
  );
};

export default Post;
