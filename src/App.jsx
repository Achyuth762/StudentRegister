import React, { useState } from "react";
import StudentCard from "./components/StudentCard";
import students from "./data/students";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function App() {
  const [department, setDepartment] = useState("All");

  const filteredStudents =
    department === "All"
      ? students
      : students.filter((student) => student.department === department);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #030407 0%, #1e293b 100%)",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: "white",
          fontWeight: "bold",
          mb: 1,
        }}
      >
        Student Directory
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >
        <Button
          onClick={() => setDepartment("All")}
          variant={department === "All" ? "contained" : "outlined"}
          sx={{
            borderColor: "#a855f7",
            color: department === "All" ? "white" : "#c084fc",
            backgroundColor: department === "All" ? "#7e22ce" : "transparent",
          }}
        >
          ALL
        </Button>

        <Button
          onClick={() => setDepartment("MCA")}
          variant={department === "MCA" ? "contained" : "outlined"}
          sx={{
            borderColor: "#a855f7",
            color: department === "MCA" ? "white" : "#c084fc",
            backgroundColor: department === "MCA" ? "#7e22ce" : "transparent",
          }}
        >
          MCA
        </Button>

        <Button
          onClick={() => setDepartment("BCA")}
          variant={department === "BCA" ? "contained" : "outlined"}
          sx={{
            borderColor: "#a855f7",
            color: department === "BCA" ? "white" : "#c084fc",
            backgroundColor: department === "BCA" ? "#7e22ce" : "transparent",
          }}
        >
          BCA
        </Button>

        <Button
          onClick={() => setDepartment("MBA")}
          variant={department === "MBA" ? "contained" : "outlined"}
          sx={{
            borderColor: "#a855f7",
            color: department === "MBA" ? "white" : "#c084fc",
            backgroundColor: department === "MBA" ? "#7e22ce" : "transparent",
          }}
        >
          MBA
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            department={student.department}
            year={student.year}
            image={student.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
