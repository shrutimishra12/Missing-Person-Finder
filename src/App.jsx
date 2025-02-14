import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Contact from "./components/Contact";


const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("auth");
  return isAuthenticated ? children : <Navigate to="/" />;
};


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />


        {/* Wrap Protected Pages Inside Layout */}
        <Route path="/" element={<PrivateRoute><Layout /></PrivateRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};


export default App;


