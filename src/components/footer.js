
import React from 'react';
import '../App.css'
const Footer = () =>
{
    return(
        <div className="footer">
            <div className="contact">
                <div className="logo">
                    <img src = '' />
                </div>
                <span>Địa chỉ: 123 Giải Phóng, Hoàng Mai, Hà Nội</span>
                <span>Điện thoại: 0912312315</span>
                <span>Email: gvbm@gmail.com</span>
                <div className="social">
                    <div className="socialLogo"><img src="../img/fb.png" href = ""/></div>
                    <div className="socialLogo"><img src="../img/tiktok.png" href = ""/></div>
                    <div className="socialLogo"><img src="../img/yt.png" href = ""/></div>
                    <div className="socialLogo"><img src="../img/zalo.png" href = ""/></div>
                </div>
            </div>
            <div className="information">
                <h3>Thông tin</h3>
                <span>Trang chủ</span>
                <span>Giới thiệu</span>
                <span>Dịch vụ</span>
                <span>Hoạt động</span>
                <span>Tìm kiếm việc làm</span>
            </div>
            <div className="service">
                <h3>Dịch vụ</h3>
                <span>Giúp việc nhà</span>
                <span>Chăm người ốm</span>
                <span>Giúp việc theo giờ</span>
                <span>Dọn dẹp Tết Nguyên Đán</span>
            </div>
            <div className="fanpage">
                <h3>Fanpage</h3>
            </div>
        </div>
    );
}
export default Footer;