import React, { Component } from "react";
import TaskItem from "./TaskItem";
import "./TaskManager.css";

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { id: 1, taskName: "Learn React Basics", isCompleted: true },
        { id: 2, taskName: "Build Mini Projects", isCompleted: false },
        { id: 3, taskName: "Push to GitHub", isCompleted: false},
      ],
    };
  }

  // ✅ Callback function
  markTaskAsDone = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: true } : task
      ),
    }));
  };

  render() {
    return (
      <div>
        <h1>Task Manager</h1>
        {this.state.tasks.map((task) => (
          <TaskItem
            key={task.id}
            taskName={task.taskName}
            isCompleted={task.isCompleted}
            onMarkDone={() => this.markTaskAsDone(task.id)}
          />
        ))}
      </div>
    );
  }
}

export default TaskList;
