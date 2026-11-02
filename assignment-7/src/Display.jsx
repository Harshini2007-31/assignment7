import { useState, useEffect } from "react";

function Display() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("students") || "[]"
    );

    setStudents(data);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">
        Registered Student Details
      </h2>

      <table className="table table-bordered table-striped">
        <thead className="table-primary">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">
                No student records found
              </td>
            </tr>
          ) : (
            students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.department}</td>
                <td>{student.phone}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Display;