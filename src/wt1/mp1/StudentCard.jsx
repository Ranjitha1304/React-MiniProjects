
import "./StudentCard.css";

function StudentCard({ name, age, course, isGraduated, skills, photo }) {
  return (
    <div className="student-card">
        {/* ✅ JSX attribute src={photo} */}
      <img src={photo} alt={name} className="student-photo" />
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>
        Status:{" "}
        {isGraduated ? (
          <span className="graduated">✅ Graduated</span>
        ) : (
          <span className="studying">❌ Still Studying</span>
        )}
      </p>
      <div>
        <strong>Skills:</strong>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentCard;
