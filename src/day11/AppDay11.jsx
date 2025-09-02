import AutoCounter from "./mp1/AutoCounter";
import SearchUserList from "./mp2/SearchUserList";

const AppDay11 = () => {
  return (
    <div>
        <h1>Day 11 Mini Projects</h1>
      <h3 style={{ textAlign: "center", color: "goldenrod" }}>
        Mini Project 1: Counter with Auto Update
      </h3>
      <AutoCounter />

      <h3 style={{ textAlign: "center", color: "goldenrod", marginTop: "40px" }}>
        Mini Project 2: Search User List
      </h3>
      <SearchUserList />

    </div>
  );
};

export default AppDay11;
