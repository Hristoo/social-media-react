import React, { Fragment, useState, useRef } from "react";

import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    if (enteredUsername.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid name (non-empty value)",
      });
      return;
    }

    // console.log(enteredUsername);
    props.onAddUser(enteredUsername);
    nameInputRef.current.value = "";
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
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
