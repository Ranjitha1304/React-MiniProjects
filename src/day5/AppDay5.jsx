
import StudentList from "./mp1/StudentList";
import TaskManager from "./mp2/TaskManager";

function AppDay5() {
  const students = [
    { name: "Ravi", marks: 72 },
    { name: "Anita", marks: 48 },
    { name: "Kiran", marks: 85 },
    { name: "Meena", marks: 33 },
    { name: "Arjun", marks: 59 },
    { name: "Riya", marks: 65 },
  ];

  const tasks = [
    { name: "Complete React homework", completed: false },
    { name: "Prepare for Django project", completed: false },
    { name: "Read GitHub docs", completed: true },
  ];

  return (
    <div>
        <h2>Day 5 Mini Projects</h2>
      <StudentList students={students} />
      <TaskManager initialTasks={tasks} />

    </div>
  );
}

export default AppDay5;

