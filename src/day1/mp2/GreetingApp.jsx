
function GreetingApp({ name }) {
  // Inline style object
  const style = {
    backgroundColor: "#d1e7ff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "Arial, sans-serif",
    margin: "10px auto",
    width: "250px"
  };

  return <div style={style}>Hello, {name}!</div>;
}

export default GreetingApp;
