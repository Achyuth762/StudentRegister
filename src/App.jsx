import React from "react";
import StudentCard from "./components/StudentCard";
import students from "./data/students";
import { useState } from "react";

function App() {
  const [department, setDepartment] = useState("All");

  const filteredStudents =
    department === "All"
      ? students
      : students.filter((student) => student.department === department);

  return (
    <div>
      <h1>Student Directory</h1>
      <button onClick={() => setDepartment("All")}>ALL</button>
      <button onClick={() => setDepartment("MCA")}>MCA</button>
      <button onClick={() => setDepartment("BCA")}>BCA</button>
      <button onClick={() => setDepartment("MBA")}>MBA</button>
      {filteredStudents.map((student) => (
        <StudentCard
          name={student.name}
          department={student.department}
          year={student.year}
        />
      ))}
    </div>
  );
}

export default App;
