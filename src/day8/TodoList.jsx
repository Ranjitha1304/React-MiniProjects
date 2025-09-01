const TodoList = ({ tasks, deleteTask }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task, index) => (
        <li
          key={index}
          style={{
            marginBottom: "10px",
            fontSize: "18px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {task}
          <button
            onClick={() => deleteTask(index)}
            style={{
              padding: "5px 10px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
