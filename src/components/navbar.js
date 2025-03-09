import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
const Navbar = () => {
    return(
        <div className="navbar fixed" style={{color: 'lightblue'}}>
            <div className="logo">
                {/* Add your logo here */}
                <Link to="/">
                    <img src= "../img/OIP.jpg" alt="Logo" />
                </Link>
            </div>
            <nav className="nav">
                <ul className="navList">
                    <li className="navItem">
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/service">Dịch vụ</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/request">Tìm giúp việc</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/jobList">Danh sách công việc</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/apply">Ứng tuyển</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/activities">Hoạt động</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;