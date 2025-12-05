import React from "react";
import "./Education.css";

const educationData = [
  {
    level: "Primary School",
    school: "Shree Shunshine English Boarding School",
    status: "Passed",
  },
  {
    level: "SLC",
    school: "Janakpur Public English Boarding School",
    board: "National Examination Board (NEB)",
    status: "Passed",
  },
  {
    level: "+2",
    school: "Mithila Institute Of Technology",
    board: "National Examination Board (NEB)",
    stream: "Science",
    status: "Passed",
  },
  {
    level: "Bachelor",
    school: "Nepal College Of Information Technology (NCIT) (Affiliated to Pokhara University)",
    course: "Bachelor's Of Engineering in Information Technology",
    status: "Passed",
  },
];

const Education = () => {
  return (
    <>
      <div className="education-wrapper">
        <h1 className="education-title">Education Roadmap</h1>
        <div className="timeline">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="content">
                <h2>{edu.level}</h2>
                {index === 0 || index === 1 ? (
                  <p><strong>School:</strong> {edu.school}</p>
                ) : index === 2 ? (
                  <p><strong>School/College:</strong> {edu.school}</p>
                ) : (
                  <p><strong>College:</strong> {edu.school}</p>
                )}
                {edu.board && <p><strong>Board:</strong> {edu.board}</p>}
                {edu.stream && <p><strong>Stream:</strong> {edu.stream}</p>}
                {edu.course && <p><strong>Course:</strong> {edu.course}</p>}
                <p><strong>Status:</strong> {edu.status}</p>
              </div>
              <span className="circle" />
            </div>
          ))}
        </div>
      </div>

      {/* Footer outside the wrapper */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} Bhawani Prasad Sah. All rights reserved.
      </footer>
    </>
  );
};

export default Education;
