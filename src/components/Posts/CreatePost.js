import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from  "./CreatePost.module.css";

const CreatePost = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredText, setEnteredText] = useState("");

  const createPostHandler = (event) => {
    event.preventDefault();

    props.onAddPost(enteredTitle, enteredText);
    // setEnteredTitle("");
  };
  

  const titleChageHandler = (event)=>{
    setEnteredTitle(event.target.value)
  }

  const textChageHandler = (event)=>{
    setEnteredText(event.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={createPostHandler}>

            <label htmlFor="title">Title</label>
            <input id="title" type="text" value={enteredTitle} onChange={titleChageHandler}/>
            <label>Text</label>
            <input type="text" value={enteredText} onChange={textChageHandler}/>
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2052-12-31" />
        <div className="new-expense__actions">
          <Button type="button" onClick={props.onCancel}>
            Cancel
          </Button>
          <Button type="submit">Add Expense</Button>
        </div>
      </form>
    </Card>
  );
};

export default CreatePost;
