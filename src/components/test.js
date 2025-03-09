import '../App.css'
import React from 'react';

const service = {
    child1: {    
        name: "Giúp việc tại nhà",
        img: "./img/act1.png",
        description: ['Công việc nội trợ, lau dọn', 'Chăm sóc em bé', 'Chăm sóc các cụ già']
    },
    child2: {
        name: "Giúp việc theo giờ",
        img: "./img/act2.png",
        description: ['Lau dọn nhà cửa', 'Giặt giũ quần áo', 'Phụ giúp gia đình các ngày lễ']
    },
    child3: {
        name: "Chăm sóc bệnh nhân",
        img: "./img/act3.png",
        description: ['Chăm sóc các bệnh nhân tại các bệnh viện nội trú']
    },
    child4: {
        name: "Giúp việc Tết Nguyên đán",
        img: "./img/act4.png",
        description: ['Giúp việc gia đình trong Ngày Tết Âm lịch']
    }
};

const active = {
    child1: {
        name: "Hoạt động tháng 12",
        img: "./img/ser1.png",
        date: '23/12/2024',
        description: 'Mô tả hoạt động tháng 12 của công ty.'
    },
    child2: {
        name: "Hoạt động tháng 12",
        img: "./img/ser2.png",
        date: '23/12/2024',
        description: 'Chi tiết hoạt động tháng 12 với các sự kiện nổi bật.'
    },
    child3: {
        name: "Chăm sóc bệnh nhân",
        img: "./img/ser3.png",
        date: '23/12/2024',
        description: 'Các hoạt động chăm sóc bệnh nhân của công ty.'
    },
    
};

const HomePage = () => {
    
    return (
        <div className="homePage">
            <div className="bannerImage" style={{height:'100vh'}}>
                <img src="./img/cleaning.jpg" alt="Banner" />
            </div>

            <div className="introduce">
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

            
            <div className="introduce">

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

            <div className="services">
                <h2>Dịch vụ</h2>
                <div className="serviceList">
                    {Object.entries(service).map(([key, value]) => (
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
                                <button className="button">Chi tiết</button>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>

            <div className="activities">
                <h1>Hoạt động</h1>
                <div className="activityList">
                    {Object.entries(active).map(([key, value]) => (
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
                            <button className="button">Chi tiết</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
