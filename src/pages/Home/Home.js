import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/Resume.pdf'
import Hire from '../../components/Hire/Hire';
import './Home.css';

const hireMePoints = [
  {
    title: "Certified Expertise",
    desc: "AWS Certified Solutions Architect – Associate, skilled in designing fault-tolerant, cost-efficient, and scalable systems on the cloud. Proven experience in deploying and maintaining infrastructure using AWS best practices.",
  },
  {
    title: "Full-Stack Skills",
    desc: "Comprehensive experience in full-stack web development using the MERN stack (MongoDB, Express.js, React, Node.js). Capable of handling frontend UI design, backend API development, and database management to build seamless and scalable applications.",
  },
  {
    title: "Problem Solver",
    desc: "Naturally analytical with a structured approach to breaking down complex technical problems. Known for developing innovative solutions that are both scalable and maintainable, ensuring long-term project success.",
  },
  {
    title: "Team Player",
    desc: "Exceptional interpersonal and communication skills developed through diverse collaborative projects. Easily adapts to various team dynamics and contributes positively to achieving shared goals with a proactive, cooperative attitude.",
  },
  {
    title: "Continuous Learner",
    desc: "Strong commitment to professional development and staying ahead in tech trends. Regularly upskill through certifications, workshops, and real-world projects to expand expertise and stay industry-relevant.",
  },
  {
    title: "Community Focused",
    desc: "Engaged in giving back through mentorship, tech talks, and open-source contributions. Believes in the value of inclusive growth and actively participates in tech communities to share knowledge and uplift others.",
  }
];

const Home = () => {
  const navigate = useNavigate();
  const [showHire, setShowHire] = useState(false);

  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h2>Hi 🙋🏽‍♂️ I'm </h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Bhawani Prasad Sah",
                  "an AWS Certified Solution Architect Associate!",
                  "a MERN Stack Developer!"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <div className="home-buttons">
            <button className="btn btn-hire" onClick={() => setShowHire(true)}>
              Hire Me
            </button>
            <a className="btn btn-Cv" href={Resume} download="BhawaniPrasadsah(CV).pdf" aria-label="Download my resume">
  My Resume
</a>

          </div>
        </div>
      </div>

      <div className="about-wrapper">
        <div className="content-container">
          <div className="about-top">
            <div className="about-img">
              <img src="/profile-2.jpg" alt="Profile" className="profile-pic" />
            </div>
            <div className="about-text">
              <h1>INTRODUCING</h1>
              <p>
                Hello, I’m <strong>Bhawani Prasad Sah</strong>, an <strong>IT Engineer</strong>, <strong>AWS Certified Solutions Architect – Associate</strong>, and <strong>MERN Stack Developer</strong>. I’m passionate about technology and cloud computing, with hands-on experience in building scalable applications and deploying on cloud.
                <br /><br />
                Beyond tech, I serve as <strong>Secretary of Blood for Nepal</strong>, where I lead several impactful programs such as <em>Aau Ragt Ka Kura Garau</em> and <em>Aau Ragt Ka Kura Bujhau</em>, focused on educating and encouraging blood donation. I actively involve youths in building a healthy blood donor family, fostering community engagement and life-saving awareness.
                <br /><br />
                A strong communicator and quick learner, I am committed to continuous growth and making a meaningful impact both in the tech world and through social service.
              </p>
            </div>
          </div>

          <div className="hire-me-section">
            <h2>What I Bring to the Table</h2>
            <div className="hire-me-grid">
              {hireMePoints.map(({ title, desc }, index) => (
                <div key={index} className="hire-me-box">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Bhawani Prasad Sah. All rights reserved.
      </footer>

      {showHire && <Hire onClose={() => setShowHire(false)} />}
    </>
  );
};

export default Home;
