
import StudentCard from "./StudentCard";
import student1 from "../../assets/pro1.jpeg";
import student2 from "../../assets/pro4.jpeg";
import student3 from "../../assets/pro3.jpeg";

function StudentList() {
  const students = [
    {
      name: "Riya",
      age: 22,
      course: "Computer Science",
      isGraduated: true,
      skills: ["React", "Django", "GitHub"],
      photo: student1
    },
    {
      name: "Sharma",
      age: 20,
      course: "Information Technology",
      isGraduated: false,
      skills: ["HTML", "CSS", "JavaScript"],
      photo: student2
    },
    {
      name: "Kiran Patel",
      age: 23,
      course: "Electronics",
      isGraduated: true,
      skills: ["Python", "C++", "SQL"],
      photo: student3
    }
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Student Profiles</h2>
      <div className="student-list">
        {students.map((student, index) => (
          <StudentCard key={index} {...student} />
        ))}
      </div>
    </div>
  );
}

export default StudentList;
