import { useParams } from "react-router-dom";
import { activities } from "../data/data.js";
import React, { useState, useCallback } from 'react';
import { Link } from "react-router-dom";
const ActiveDetail = () => {
  const { id } = useParams();
  const active = activities.find((item) => item.id === parseInt(id));

  if (!active) return <h2>Không tìm thấy tin tức</h2>;

  return (
    <div className="actDetail">
        <h1>{active.title}</h1>
        <img src={active.img} width="100%" />
        <div className="actDetailText">
          <h3>
            Chi tiết
          </h3>
            <ul>
             {active.content.map(content => <li>{content}</li>)}
            </ul>
            
        </div>
        <div style={{width:'100%', display:'flex', alignItems:'center',justifyContent:'center'}}>
            <button className="button">
                <Link to={``}>Đăng ký</Link>
            </button>
        </div>
        
    </div>
  );
};

export default ActiveDetail;