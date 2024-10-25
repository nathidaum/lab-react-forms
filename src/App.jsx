import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudentForm from "./components/AddStudentForm";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const createStudent = (newStudentObj) => {
  const newStudentsArray = [newStudentObj, ...students];
  setStudents(newStudentsArray);
  }

  return (
    <div className="App pt-20">
      <Navbar />
      <AddStudentForm callBacktoAddStudent={createStudent}/>

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
