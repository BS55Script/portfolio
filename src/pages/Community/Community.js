import React, { useState } from "react";
import "./Community.css";

const communityData = [
  {
    name: "Blood For Nepal(BFN)",
    description: (
      <>
        <h3>A Journey from General Member to Secretary</h3>
        <p>
          I joined <strong>Blood for Nepal</strong> in 2021 as a general member, where I had the opportunity to serve people in need by playing a crucial role in managing blood supply and acting as a bridge between donors and recipients.
        </p>
        <ul>
          <li>Appointed as the <strong>Coordinator</strong> for Blood for Nepal Dhanusha (now Central Madhesh Region) in 2023</li>
          <li>Initiated awareness programs under the slogan <em>"Aau Ragat Ka Kura Garum, Aau Ragat Ka Kura Bujhum"</em></li>
          <li>Organized multiple <strong>blood donation drives</strong>, <strong>health camps</strong>, and <strong>panel discussions</strong></li>
          <li>Appointed <strong>Board Member</strong> and <strong>Regional Advisor</strong> in 2024</li>
          <li>Currently serving as the <strong>Secretary</strong> of Blood for Nepal (2025)</li>
        </ul>
      </>
    ),
    images: ["BFN9.jpg", "BFN2.jpg", "BFN4.jpg", "BFN5.jpg", "BFN3.jpg", "BFN6.jpg", "BFN7.jpg", "BFN8.jpg", "BFN1.jpg"],
    awards: [
      "Best Regional Advisor Of the Year-2024",
      "Best Team Of the year - 2024",
      "BFN Of The Year(Semi-Annual)-2022",
      "Most Dedicated Team - 2022",
      "BFN of the Month-August(2022)",
      "BFN Of The Mont-June(2022)",
      "Volunteer of The Month-April(2022)"
    ],
  },
  {
    name: "Leo Club Of JanakpurDham",
    description: (
      <>
        <h3>A Journey of Leadership in Leo Club of Janakpur Dham</h3>
        <p>
          I joined the <strong>Leo Club of Janakpur Dham</strong> as the <strong>Blood Management Coordinator</strong> during the Lionsistic Year <strong>2022/2023</strong>. Due to my dedication and effective work, I was reappointed to the same role for the <strong>2023/2024</strong> term.
        </p>
        <p>
          In the Lionsistic Year <strong>2024/2025</strong>, I was honored to be appointed as the <strong>Tammer</strong> of the club. Throughout my journey, I have played a crucial role in planning and executing various impactful programs organized both by the club and <strong>District 325F, Nepal</strong>.
        </p>
        <ul>
          <li>Led and supported numerous blood donation campaigns and awareness drives</li>
          <li>Collaborated with district leaders to execute health-focused community events</li>
          <li>Demonstrated consistent leadership and initiative in club activities</li>
          <li>Served as a key coordinator and facilitator for youth engagement programs</li>
        </ul>
      </>
    ),
    images: ["LEO4.jpg,", "LEO2.jpg", "LEO3.jpg","LEO1.jpg"],
    awards: ["Member OF The Month- August(2022)"]
  },
];

const Community = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expanded, setExpanded] = useState({});
  const [zoomedImage, setZoomedImage] = useState(null);

  const itemsPerPage = 2;
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = communityData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(communityData.length / itemsPerPage);

  const toggleExpanded = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const openZoom = (img) => setZoomedImage(img);
  const closeZoom = () => setZoomedImage(null);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) setCurrentPage(newPage);
  };

  return (
    <>
      <div className="community-container">
        {currentItems.map((item, index) => {
          const globalIndex = indexOfFirst + index;
          const isExpanded = expanded[globalIndex];

          const imagesToShow = isExpanded ? item.images : item.images.slice(0, 4);
          const awardsToShow = isExpanded ? item.awards : item.awards.slice(0, 2);
          const extraImageCount = item.images.length - 4;
          

          return (
            <div className={`community-card ${globalIndex % 2 === 1 ? "reverse" : ""}`} key={globalIndex}>
              <div className="image-grid">
                {imagesToShow.map((img, idx) => {
                  const isLastVisible = !isExpanded && idx === 3 && extraImageCount > 0;
                  return (
                    <div className="image-wrapper" key={idx}>
                      <img
                        src={`/${img}`}
                        alt={`${item.name}-${idx}`}
                        className="clickable-image"
                        onClick={(e) => {
                          e.stopPropagation();
                          openZoom(img);
                        }}
                      />
                      {isLastVisible && <div className="image-overlay">+{extraImageCount}</div>}
                    </div>
                  );
                })}
              </div>

              <div className="community-info">
                <h2>{item.name}</h2>
                <div className={`community-description ${isExpanded ? "expanded" : "collapsed"}`}>
                  {item.description}
                </div>

                {item.awards && item.awards.length > 0 && (
                  <div className="community-awards">
                    <h4>Awards & Recognitions:</h4>
                    <ul>
                      {awardsToShow.map((award, idx) => (
                        <li key={idx}>{award}</li>
                      ))}
                    </ul>
                  </div>
                )}

              {(item.images.length > 4 || item.awards.length > 2 || item.name === "Leo Club Of JanakpurDham") && (
               <button className="toggle-btn" onClick={() => toggleExpanded(globalIndex)}>
               {isExpanded ? "Show Less" : "Show More"}
               </button>
               )}

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

export default Community;
