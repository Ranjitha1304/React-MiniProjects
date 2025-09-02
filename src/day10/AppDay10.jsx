import React from "react";
import CounterWithTitle from "./mp1/CounterWithTitle";
import UserList from "./mp2/UserList";

const AppDay10 = () => {
  return (
    <div>
      <h1>Day 10 Mini Projects</h1>

      <h3 style={{ textAlign: "center",color:"goldenrod" }}>Mini Project 1: Counter with Title Update</h3>
      <CounterWithTitle />

      <h3 style={{ textAlign: "center",color:"goldenrod" }}>Mini Project 2: User List</h3>
      <UserList />

    </div>
  );
};

export default AppDay10;
