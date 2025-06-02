import React, { useState } from "react";
import "./Certifications.css";

const certificationsData = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "May 2025",
    description:
      "This certification demonstrates my comprehensive understanding of AWS services and technologies. It validates my ability to design and implement secure, robust solutions based on architectural best practices and customer requirements. I am capable of building well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant.",
    image: "AWS1.jpg",
    badgeImage: "AWSB1.png",
    badgeLink: "https://www.credly.com/badges/da380a78-57a4-4e33-ae33-21cc6d3ba2ee",
  },
  {
    title: "MERN Stack Developer",
    issuer: "Broadway Infosys",
    date: "June 2025",
    description:
      "This certificate is awarded for the successful completion of a comprehensive training program in full stack web development using the MERN stack MongoDB, Express.js, React.js, and Node.js. The program covered front-end and back-end development, RESTful API design, database integration, user authentication, and deployment of real-world web applications. The recipient demonstrated practical skills through hands-on projects, showcasing the ability to build and deploy scalable, full-featured web solutions.",
    image: "MERN.jpg",
  },
  {
    title: "AWS Academy Graduate- Cloud Architecting",
    issuer: "Amazon Web Services",
    date: "30 January 2025",
    description:
      "Awarded for completing the AWS Academy Cloud Architecting course, which provides comprehensive training in designing cloud infrastructure using Amazon Web Services (AWS). The program covers core topics such as VPC design, compute, storage, databases, security, high availability, scalability, and cost optimization. Through hands-on labs and real-world scenarios, the recipient demonstrated the ability to design and deploy secure, scalable, and resilient cloud architectures, following AWS best practices and the AWS Well-Architected Framework.",
    image: "AWS2.jpg",
    badgeImage: "AWSB2.png",
    badgeLink: "https://www.credly.com/badges/ece0bb4f-8fac-4f33-a6cd-9587dd17185f/public_url",
  },
  {
    title: "AWS Academy Graduate-Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "15 January 2025",
    description:
      "Awarded for successfully completing the AWS Academy Cloud Foundations course, which introduces the fundamental concepts of cloud computing with Amazon Web Services (AWS). The program covers core AWS services, cloud architecture principles, security, pricing, and support models. Through hands-on labs and interactive learning, the recipient demonstrated foundational knowledge of AWS and the ability to navigate and use key cloud services in real-world scenarios.",
    image: "AWS3.jpg",
    badgeImage: "AWSB3.png",
    badgeLink: "https://www.credly.com/badges/8857a203-acee-4a38-807c-188c41ad3048/public_url",
  },
  {
    title: "C & C++",
    issuer: "BroadWay Infosys",
    date: "27 June 2020",
    description:
      "Awarded for completing a comprehensive course in C programming, covering core programming concepts such as data types, control structures, functions, arrays, pointers, memory management, and file handling. The recipient has demonstrated the ability to write efficient, modular, and structured programs, along with problem-solving skills using low-level system programming principles.",
    image: "C++.jpg",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "June 2024",
    description:
      "Awarded for successfully completing the AWS Cloud Practitioner Essentials course, which provides a foundational understanding of cloud computing concepts and AWS services. The program covers core topics including AWS cloud infrastructure, security, pricing models, billing, and basic architectural principles. The recipient demonstrated knowledge of how to effectively navigate AWS services and leverage cloud technology to support business needs.",
    image: "AWS4.jpeg",
  },
];

const ITEMS_PER_PAGE = 2;

const Certifications = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCerts = certificationsData.slice(
    startIdx,
    startIdx + ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(certificationsData.length / ITEMS_PER_PAGE);

  return (
    <div className="cert-page-wrapper">
      <h1 className="cert-page-title">Certifications</h1>

      {paginatedCerts.map((cert, index) => {
        const globalIndex = startIdx + index;
        const isAWS = cert.issuer === "Amazon Web Services";

        return (
          <div
            className={`cert-section fade-slide-in ${
              index % 2 === 0 ? "left-image" : "right-image"
            }`}
            key={globalIndex}
          >
            <div className="cert-img-badges-container">
              <div className="cert-img-box">
                <img src={cert.image} alt={cert.title} />
              </div>

              {/* Show badge only if it's AWS and not on the 3rd page */}
              {isAWS && currentPage !== 3 && (
                <div className="badge-img-box">
                  {cert.badgeImage && (
                    <img
                      src={cert.badgeImage}
                      alt={`${cert.title} Badge`}
                      className="cert-badge-img"
                    />
                  )}
                  {cert.badgeLink && (
                    <a
                      href={cert.badgeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge-link"
                    >
                      Credly Link
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="cert-info-box">
              <h2>{cert.title}</h2>
              <h4>{cert.issuer}</h4>
              <p className="cert-date">Issued Date: {cert.date}</p>
              <p className="cert-desc">{cert.description}</p>
            </div>
          </div>
        );
      })}

      <div className="pagination-controls">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Bhawani Prasad Sah. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Certifications;
