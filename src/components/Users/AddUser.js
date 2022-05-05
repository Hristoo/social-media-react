import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0) {
      return;
    }

    // console.log(enteredUsername);
    props.onAddUser(enteredUsername);
    setEnteredUsername("");
  };

  const usernameChageHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChageHandler}
          value={enteredUsername}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
