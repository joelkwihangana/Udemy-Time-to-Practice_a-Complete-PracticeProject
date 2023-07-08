import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0 || age < 0) {
      return;
    }

    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  };
  return (
    <Card className={classes.input}>
      <form action="" onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="age">Age (Yeaer)</label>
        <input
          type="number"
          name=""
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
