
import "./StudentList.css";

function StudentList({ students }) {
  return (
    <div className="student-card">
      <h3 className="student-title">Student Marks</h3>
      <ul className="student-list">
        {students.map((student, index) => (
          <li
            key={index}
            className={`student-item ${student.marks > 50 ? "highlight" : ""}`}
          >
            {student.name} — {student.marks}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
