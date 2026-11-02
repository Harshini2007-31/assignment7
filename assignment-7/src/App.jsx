import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import Display from "./Display";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-primary p-3">
        <h4 className="text-white">Student Registration</h4>
        <div>
          <Link to="/" className="btn btn-light me-2">
            Register
          </Link>
          <Link to="/display" className="btn btn-light">
            Display
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;