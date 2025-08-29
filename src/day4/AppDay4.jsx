
import Profile from "./mp1/Profile";
import TaskList from "./mp2/TaskList";

function AppDay4() {

      const tasks = [
    "Finish React tasks",
    "Read about props and state",
    "Practice mini projects",
    "Review yesterday's work"
  ];

  return (
    <div>
      <h2>Day 4 Mini Projects</h2>

      {/* With custom props */}
      <Profile name="Ranjitha V" age="20" city="Chennai" />

      {/* With missing props (default values will be used) */}
      <Profile />

    <TaskList tasks = {tasks} />

    </div>
  );
}

export default AppDay4;
