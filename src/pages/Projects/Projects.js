import React, { useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Portfolio Website",
    description: (
      <>
        <p>
          This is a fully responsive personal portfolio website built using <strong>React</strong>. It serves as a digital resume to showcase my professional profile, including <strong>educational background</strong>, <strong>certifications</strong>, <strong>technical skills</strong>, and <strong>projects</strong>.
        </p>
        <ul>
          <li><strong>Fully responsive</strong> design for all device sizes</li>
          <li>Clean and modern UI enhanced with <strong>Framer Motion animations</strong></li>
          <li>Features <strong>pagination</strong> for browsing certifications and projects</li>
          <li>Organized and intuitive layout for easy navigation</li>
          <li><strong>Dynamically rendered content</strong> based on structured project data</li>
          <li><strong>Hosted online on AWS </strong> for public access and demonstration</li>
        </ul>
        <p>
          The website provides a professional and interactive way to present my achievements and skill set to potential employers, collaborators, and peers.
        </p>
      </>
    ),
    technologies: ["React", "CSS", "Framer Motion"],
    images: ["pf1.jpg", "pf2.jpg", "pf3.jpg", "pf4.jpg", "pf5.jpg"],
    github: "https://github.com/BS55Script/portolio",
  },
  {
    title: "Blogging Website - The Voice Canvas",
    description: (
      <>
        <p>
          <strong>The Voice Canvas</strong> is a dynamic full-stack blogging platform built with the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js). It enables users to express themselves by creating, editing, and deleting blog posts across various categories. The platform supports a rich commenting system where users can comment on blogs, as well as edit or delete their own comments.
        </p>
        <ul>
          <li>Multi-user <strong>authentication and authorization</strong></li>
          <li><strong>Create</strong>, <strong>edit</strong>, and <strong>delete</strong> blogs</li>
          <li><strong>Commenting system</strong> with full control over user's own comments</li>
          <li><strong>Categorized blogs</strong> for organized browsing</li>
          <li><strong>Follow and unfollow</strong> functionality to connect with other users</li>
          <li><strong>Responsive UI</strong> for seamless use across all device sizes</li>
        </ul>
        <p>
          This project aims to create a social yet personal space where users can voice their thoughts, interact with others, and explore diverse ideas through blogs.
        </p>
      </>
    ),
    technologies: ["MERN Stack", "React", "Express", "MongoDB", "Node.js", "JWT"],
    images: ["Blogweb1.jpg", "Blogweb2.jpg", "Blogweb3.jpg", "Blogweb4.jpg", "Blogweb5.jpg", "Blogweb6.jpg"],
    github: "https://github.com/BS55Script/Blogging-website",
  },
  {
    title: "BookMyTicket.com",
    description: (
      <>
        <p>
          <strong>BookMyTicket.com</strong> is a comprehensive ticket booking web application developed to streamline the bus booking process for both users and private bus companies. The platform allows users to easily <strong>book, cancel, and update tickets</strong>, while offering a digital ticketing experience for convenience and eco-friendliness.
        </p>
        <ul>
          <li><strong>User-friendly dashboard</strong> to view available buses on different routes</li>
          <li><strong>Admin panel</strong> with functionalities to update routes, modify bus details, and manage bookings</li>
          <li>Allows <strong>ticket booking, cancellation, and updates</strong> directly from the user interface</li>
          <li><strong>Digital ticket</strong> generation for seamless travel experiences</li>
          <li>Secure and efficient <strong>booking confirmation and deletion</strong> system</li>
          <li>Built with the goal of <strong>simplifying route management</strong> for individual bus companies</li>
        </ul>
        <p>
          This project aims to modernize the ticketing infrastructure for smaller bus operators, reducing their operational load while providing a smooth experience for travelers.
        </p>
      </>
    ),
    technologies: ["PHP", "HTML", "CSS"],
    images: ["BTC1.jpg","BTC2.jpg","BTC4.jpg","BTC5.jpg","BTC6.jpg","BTC7.jpg","BTC8.jpg","BTC9.jpg"],
    github: "https://github.com/yourusername/bookmyticket",
  }
  
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expanded, setExpanded] = useState({});  // Tracks which project is expanded (both images & content)
  const [zoomedImage, setZoomedImage] = useState(null);

  const projectsPerPage = 2;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) setCurrentPage(newPage);
  };

  const toggleExpanded = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const openZoom = (img) => setZoomedImage(img);
  const closeZoom = () => setZoomedImage(null);

  return (
    <>
      <div className="projects-container">
        <h1 className="projects-title">PROJECTS COLLECTIONS</h1>
        {currentProjects.map((project, index) => {
          const globalIndex = indexOfFirstProject + index;
          const isExpanded = expanded[globalIndex];
          const imagesToShow = isExpanded ? project.images : project.images.slice(0, 4);
          const extraCount = project.images.length - 4;

          return (
            <div
              className={`project-card ${globalIndex % 2 === 1 ? "reverse" : ""}`}
              key={globalIndex}
            >
              <div className="project-images-grid">
                {imagesToShow.map((img, idx) => {
                  const isLastVisible = !isExpanded && idx === 3 && extraCount > 0;
                  return (
                    <div className="image-wrapper" key={idx}>
                      <img
                        src={`/${img}`}
                        alt={`${project.title}-${idx}`}
                        className="clickable-image"
                        onClick={(e) => {
                          e.stopPropagation();
                          openZoom(img);
                        }}
                      />
                      {isLastVisible && <div className="image-overlay">+{extraCount}</div>}
                    </div>
                  );
                })}
              </div>

              <div className="project-info">
                <h2>{project.title}</h2>
                <div className={`project-description ${isExpanded ? "expanded" : "collapsed"}`}>
                  {project.description}
                </div>
                <h4>Technologies Used:</h4>
                <ul>
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    View on GitHub
                  </a>
                  {project.images.length > 4 && (
                    <button
                      className="toggle-images-btn"
                      onClick={() => toggleExpanded(globalIndex)}
                    >
                      {isExpanded ? "Show Less" : "Show More"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        <div className="pagination-controls">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Bhawani Prasad Sah. All rights reserved.
      </footer>

      {zoomedImage && (
        <div className="zoom-overlay" onClick={closeZoom}>
          <div className="zoom-image-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeZoom}>×</button>
            <img src={`/${zoomedImage}`} alt="Zoomed" className="zoomed-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
