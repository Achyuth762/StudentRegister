import React from "react";
import StudentCard from "./components/StudentCard";
import students from "./data/students";
import { Button } from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid";

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

      <Grid container spacing={0.5} style={{ marginTop: 20 }}>
        {filteredStudents.map((student) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StudentCard
              name={student.name}
              department={student.department}
              year={student.year}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
