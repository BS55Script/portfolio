import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import Hire from '../../components/Hire/Hire';
import './Home.css';

const hireMePoints = [
  {
    title: "Certified Expertise",
    desc: "AWS Certified Solutions Architect – Associate and AWS Certified AI Practitioner, skilled in designing fault-tolerant, cost-efficient, and scalable cloud architectures. Proven experience in deploying, managing, and optimizing infrastructure using AWS best practices, with a strong foundation in AI/ML concepts, responsible AI, and cloud-based AI services.",
  },
  {
    title: "Full-Stack Skills",
    desc: "Experienced in full-stack web development using the MERN stack (MongoDB, Express.js, React, Node.js).Skilled in designing responsive and intuitive frontends, developing robust backend APIs, and efficiently managing databases.Capable of building scalable, high-performance web applications with clean architecture, best practices, and seamless user experiences.",
  },
  {
    title: "Problem Solver",
    desc: "I approach complex technical problems with a clear and analytical mindset and enjoy breaking down complex technical problems into clear, manageable parts, approaching each challenge with a structured mindset.I am skilled at designing, developing, and implementing innovative solutions that are efficient, scalable, maintainable, and reliable for long-term use.",
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
                  "an AWS Certified Solution Architect Associate ",
                  "an AWS Certified AI Practitioner",
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
            <button
             className="btn btn-Cv"
                 onClick={() => {
                      const link = document.createElement("a");
                       link.href = "/resume.pdf";
                       link.download = "Bhawani-Prasad-Sah(CV).pdf";
                       document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                   }}
            >
              My Resume
              </button>

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
                Hello, I’m <strong>Bhawani Prasad Sah</strong>, an <strong>IT Engineer</strong>, <strong>AWS Certified Solutions Architect – Associate</strong>, <strong>AWS Certified AI Practitioner</strong>,and <strong>MERN Stack Developer</strong>. I’m passionate about technology, cloud computing, and artificial intelligence, with hands-on experience in building scalable full-stack applications, deploying secure and cost-efficient solutions on AWS, and applying AI/ML concepts and services to modern cloud-based systems.
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
