import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // Import PropTypes
import { activities } from '../data/data.js';
import '../App.css'
const JobCard = ({ act }) => {
  return (
    <div className="active-card">
      <img src={act.img || "/placeholder.png"} alt={act.title} width="150" />
      <div className="active-details">
        <h3>{act.title}</h3>
        <span>{act.date}</span>
        <p>{act.smallText}</p>
      </div>
      <Link to={`/activities/${act.id}`} className="button">
        <button >
          Xem chi tiết
        </button>
      </Link>
    </div>
  );
};

JobCard.propTypes = {
  act: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    date: PropTypes.string,
    smallText: PropTypes.string,
  }).isRequired,
};

const Activities = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const actsPerPage = 10;
  const indexOfLastAct = currentPage * actsPerPage;
  const indexOfFirstAct = indexOfLastAct - actsPerPage;
  const currentActs = activities.slice(indexOfFirstAct, indexOfLastAct);
  
  return (
    <div className="joblist" style={{marginTop:'100px'}}>
      <h1>Danh sách hoạt động</h1>
      <div className="active-cards">
        {currentActs.map((act) => (
          <JobCard key={act.id} act={act} />
        ))}
      </div>
      
      {/* Phân trang */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(activities.length / actsPerPage) }, (_, i) => (
          <button key={i + 1} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Activities;
