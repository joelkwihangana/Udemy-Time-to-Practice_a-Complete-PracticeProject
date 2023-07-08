import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import React, { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUsersListHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        { name: uName, age: uAge, id: Math.random().toString() },
        ...prevUsersList,
      ];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUsersListHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
