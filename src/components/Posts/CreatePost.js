import React, { useState } from "react";

import "./CreatePost.css";

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
    <div>
      <form onSubmit={createPostHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChageHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Text</label>
            <input type="text" value={enteredText} onChange={textChageHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2052-12-31" />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
