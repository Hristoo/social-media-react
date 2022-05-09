import React, { Fragment, useState, useEffect } from "react";

import Post from "./components/Posts/Post";
import Login from "./components/Login/Login";
import AddUser from "./components/Users/AddUser";
import CreatePost from "./components/Posts/CreatePost";
import UsersList from "./components/Users/UsersList";
import PostsList from "./components/Posts/PostsList";

import "./App.css";
import TestClass from "./components/TestClass";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [postsList, setPostsList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const addUserHandler = (uName) => {
    localStorage.setItem("isLoggedIn", "1");
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, id: Math.random().toString() }];
    });
  };

  const addPostHandler = (pTitle, pText) => {
    setPostsList((prevPostsList) => {
      return [
        ...prevPostsList,
        { title: pTitle, text: pText, id: Math.random().toString() },
      ];
    });
  };

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Fragment>
        <TestClass />
        {!isLoggedIn && <AddUser onAddUser={addUserHandler} />}
        {!isLoggedIn && <UsersList users={usersList} />}
        {isLoggedIn && <CreatePost onAddPost={addPostHandler} />}
        {(postsList & isLoggedIn) && <PostsList posts={postsList} />}
      </Fragment>
    </div>
  );
}

export default App;
