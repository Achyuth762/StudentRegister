import React from "react";
import StudentCard from "./components/StudentCard";
import students from "./data/students";
import { Button } from "@mui/material";
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
      <Button onClick={() => setDepartment("All")} variant="outlined">
        All
      </Button>
      <Button onClick={() => setDepartment("MCA")} variant="outlined">
        MCA
      </Button>
      <Button onClick={() => setDepartment("BCA")} variant="outlined">
        BCA
      </Button>
      <Button onClick={() => setDepartment("MBA")} variant="outlined">
        MBA
      </Button>
      <div
        className="cards"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {filteredStudents.map((student) => (
          <StudentCard
            name={student.name}
            department={student.department}
            year={student.year}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
