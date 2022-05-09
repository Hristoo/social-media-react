import React, { Fragment, useState, useRef } from "react";

import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const passwordInputRef = useRef();

  const [error, setError] = useState();
  

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    

    if (enteredUsername.trim().length === 0) {
      setError({
        title: "Invalid username!",
        message: "Please enter a valid name (non-empty value)",
      });
      return;
    }

    if (enteredPassword.trim().length === 0) {
      setError({
        title: "Invalid pasword!",
        message: "Please enter a valid password (non-empty value)",
      });
      return;
    }

    // console.log(enteredUsername);
    props.onAddUser(enteredUsername, enteredPassword);
    nameInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" ref={passwordInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
