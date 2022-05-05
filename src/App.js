import React, { Fragment, useState } from "react";

import Post from "./components/Posts/Post";
import AddUser from "./components/Users/AddUser";
import CreatePost from "./components/Posts/CreatePost";
import UsersList from "./components/Users/UsersList";
import PostsList from "./components/Posts/PostsList"

import "./App.css";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [postsList, setPostsList] = useState([]);

  const addUserHandler = (uName) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, id: Math.random().toString() }];
    });
  };

const addPostHandler = (pTitle, pText) =>{
  setPostsList((prevPostsList) => {
    return [...prevPostsList, { title: pTitle, text: pText, id: Math.random().toString() }];
  });
}

  return (
    <div className="App">
      <Fragment>
        <AddUser onAddUser={addUserHandler} />
        <UsersList users={usersList} />
        <CreatePost onAddPost={addPostHandler}/>
        <PostsList  posts={postsList} />
      </Fragment>
    </div>
  );
}

export default App;
