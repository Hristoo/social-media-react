import React from "react";

import Card from "../UI/Card";
import classes from "./PostsList.module.css";

const PostsList = (props) => {
  return (
    <Card className={classes.posts}>
      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default PostsList;
