import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    phone: ""
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.values(form).some(value => !value.trim())) {
      setError("All fields are required!");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Enter a valid email!");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      setError("Phone number must contain 10 digits!");
      return;
    }

    const students = JSON.parse(
      localStorage.getItem("students") || "[]"
    );

    students.push(form);

    localStorage.setItem("students", JSON.stringify(students));

    setError("");
    alert("Registration Successful!");

    navigate("/display");
  }

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow mx-auto form-card">
        <h2 className="text-center text-primary">
          Student Registration Form
        </h2>

        {error && <p className="text-danger">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label className="form-label">Student Name</label>
          <input
            className="form-control mb-3"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <label className="form-label">Email</label>
          <input
            className="form-control mb-3"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
          />

          <label className="form-label">Department</label>
          <select
            className="form-select mb-3"
            name="department"
            value={form.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="AIML">AIML</option>
            <option value="ECE">ECE</option>
          </select>

          <label className="form-label">Phone Number</label>
          <input
            className="form-control mb-3"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter 10 digit number"
          />

          <button className="btn btn-primary w-100">
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;