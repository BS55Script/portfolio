import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Education from "./pages/Education/Education";
import Certifications from "./pages/Certifications/Certifications";
import Community from "./pages/Community/Community";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Hire from "./components/Hire/Hire";
import Resume from "../src/assets/Resume.pdf" 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="community" element={<Community/>} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
        </Route>
        <Route path="/hire" element={<Hire />} />
      </Routes>
    </Router>
  );
}

export default App;
