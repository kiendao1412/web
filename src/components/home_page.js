import '../App.css';
import '../index.css';
import React, { useEffect, useRef, useState } from 'react';
import {activities,jobs} from "../data/data.js"
import { Link } from "react-router-dom";
const HomePage = () => {
    
    return (
        <div >
            <div className="homePage">
                <div className="bannerImage full-page-section" >
                    <img src="./img/cleaning.jpg" alt="Banner" />
                </div>

                <div className="introduce full-page-section">
                    <div className="introduceText">
                    <h2>Công ty TNHH Giúp việc Bạch Mai</h2>
                    <h3 ><i>Chăm sóc ngôi nhà bạn, như chính ngôi nhà của chúng tôi</i></h3>
                    <span>
                        Giúp việc Bạch Mai tận tâm cung cấp các dịch vụ 
                        giúp việc gia đình, chăm sóc người bệnh 
                        và chăm sóc bệnh nhân tại bệnh viện.
                    </span>
                    <span>Chúng tôi cam kết mang đến dịch vụ tốt nhất, giúp khách hàng an tâm và hài lòng tuyệt đối. Giúp việc Bạch Mai hoạt động với tôn chỉ trách nhiệm, tận tâm , chu đáo  trong từng công việc, xây dựng niềm tin và uy tín lâu dài với khách hàng.</span>
                    </div>
                    <div className="introduceImg">
                        <img src="./img/img6.png" alt="Giới thiệu công ty" />
                    </div>
                </div>

                
                <div className="introduce full-page-section">

                    <div className="introduceImg" style={{position: 'relative',height: '400px',margin: '50px auto',}}>
                        
                                        
                        <div class="background-shape-1"></div>
                        <div class="background-shape-2"></div>
                    
                        <img src="./img/why.png" alt="Người dọn dẹp" class="person-image"/>
                    </div>
                    <div className="introduceText" style={{alignItems:'center'}}>
                        <h2>Lý do chọn chúng tôi</h2>
                        <ul className="reasonList">
                            <li>Tận tâm chu đáo.</li>
                            <li>Uy tín chất lượng.</li>
                            <li>Đáp ứng nhu cầu đa dạng.</li>
                            <li>Hết lòng vì khách hàng.</li>
                        </ul>
                    </div>
                </div>  

                <div className="services full-page-section">
                    <h2>Dịch vụ</h2>
                    <div className="serviceList">
                        {Object.entries(jobs).map(([key, value]) => (
                            <div key={key} className="serviceItem">
                                
                                {value.img ? (
                                    <img src={value.img} alt={value.name} className="serviceImage" />
                                ) : (
                                    <p>[.]</p>
                                )}
                                <div className='service-info'>
                                    <h3>{value.name}</h3>
                                    <ul>
                                        {value.description.map((desc, index) => (
                                            <li key={index}>{desc}</li>
                                        ))}
                                    </ul>
                                    <button className="button"><Link to={`/jobList/${value.id}`}>Chi tiết</Link></button>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>

                <div className="activities full-page-section">
                    <h1>Hoạt động</h1>
                    <div className="activityList">
                        {Object.entries(activities).map(([key, value]) => (
                            <div key={key} className="activityItem">
                                {value.img ? (
                                    <img src={value.img} alt={value.name} className="activityImage" />
                                ) : (
                                    <p>[Ảnh đang cập nhật]</p>
                                )}
                                <div className="activityText">
                                    <h3>{value.name}</h3> 
                                    <span>{value.date}</span>
                                    <p>{value.description}</p>
                                </div>
                                <button className="button"><Link to={`/activities/${value.id}`}>Chi tiết</Link></button>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default HomePage;
