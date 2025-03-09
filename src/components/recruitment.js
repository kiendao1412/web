import React, { useState, useCallback } from 'react';
import '../App.css'
const CITIES = ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng']; // Add more cities as needed
const SERVICES = ['Toàn thời gian', 'Bán thời gian', 'Theo dự án']; // Add more services as needed

const Recruitment = () => {
    const [dob, setDob] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: '',
        district: '',
        address: '',
        service: '',
        requirements: '',
        agreedToTerms: false
    });

    // Style definitions
    const labelStyle = {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold'
    };

    const inputStyle = {
        width: '100%',
        padding: '8px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc'
    };

    const selectStyle = {
        flex: 1,
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc'
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px'
    };

    const errorStyle = {
        color: 'red',
        fontSize: '12px',
        marginBottom: '5px'
    };

    const handleInputChange = useCallback((event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setFormData(prev => ({ ...prev, [name]: inputValue }));
    }, []);

    const handleDateChange = (event) => {
        setDob(event.target.value);
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name) newErrors.name = 'Vui lòng nhập tên';
        if (!formData.phone) newErrors.phone = 'Vui lòng nhập số điện thoại';
        if (!formData.city) newErrors.city = 'Vui lòng chọn thành phố';
        if (!formData.service) newErrors.service = 'Vui lòng chọn hình thức lao động';
        if (!formData.agreedToTerms) newErrors.agreedToTerms = 'Vui lòng đồng ý với điều khoản';
        if (!dob) newErrors.dob = 'Vui lòng chọn ngày sinh';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log("Gửi thông tin:", { ...formData, dob, selectedFile });
        }
    };

    return (
        <div style={{marginTop:'100px'}}>
            <h1 style={{textAlign:'center'}}>Ứng tuyển</h1>
            <div className="request">
                <div className="requestText">
                    <span className="">Người lao động nhập thông tin để được hỗ trợ tìm kiếm công việc.</span>
                    <div>
                        <h3 >Quyền lợi</h3>
                        <ul>
                            <li>
                                <span >Không mất phí</span>
                                <span>- non magni numquam cum ipsa voluptatum.</span>
                            </li>
                            <li>
                                <span>Có chỗ ăn ở</span>
                                <span>- non fdjkn agagni nuyyh ymq uam cum ipsa voluptatum.</span>
                            </li>
                            <li>
                                <span>Hỗ trợ tìm việc trong thời gian dài</span>
                                <span>- on magni numquam cum ipsa voluptatum.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Liên hệ với chúng tôi</h3>
                        <div>
                            <p><strong>Địa chỉ:</strong> 123 Giải Phóng, Hoàng Mai, Hà Nội</p>
                            <p><strong>Điện thoại:</strong> 0912312315</p>
                            <p><strong>Email:</strong> gvbm@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="requestForm">
                    <form onSubmit={handleSubmit}>
                        <div className='input'>
                            <label style={labelStyle}>Tên</label>
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Nhập tên" 
                                style={{
                                    ...inputStyle,
                                    borderColor: errors.name ? 'red' : '#ccc'
                                }}
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            {errors.name && <div style={errorStyle}>{errors.name}</div>}
                        </div>

                        <div className='input'>
                            <label style={labelStyle}>Số điện thoại</label>
                            <input 
                                type="tel" 
                                name="phone"
                                placeholder="Nhập số điện thoại" 
                                style={{
                                    ...inputStyle,
                                    borderColor: errors.phone ? 'red' : '#ccc'
                                }}
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                            {errors.phone && <div style={errorStyle}>{errors.phone}</div>}
                        </div>

                        <div className='input'>
                            <label style={labelStyle}>Ngày sinh</label>
                            <input 
                                type="date" 
                                id="dob" 
                                name="dob" 
                                value={dob} 
                                onChange={handleDateChange}
                                style={inputStyle}
                            />
                            {errors.dob && <div style={errorStyle}>{errors.dob}</div>}
                        </div>

                        <div className='input'>
                            <label style={labelStyle}>Quê quán</label>
                            
                            
                            <input 
                                type="text" 
                                name="address"
                                placeholder="Địa chỉ cụ thể" 
                                style={inputStyle}
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className='input'>
                            <label style={labelStyle}>Hình thức lao động</label>
                            <select  className='custom-select'
                                name="service"
                                style={{
                                    ...inputStyle,
                                    borderColor: errors.service ? 'red' : '#ccc'
                                }}
                                value={formData.service}
                                onChange={handleInputChange}
                            >
                                <option value="">Chọn hình thức lao động</option>
                                {SERVICES.map(service => (
                                    <option key={service} value={service}>{service}</option>
                                ))}
                            </select>
                            {errors.service && <div style={errorStyle}>{errors.service}</div>}
                        </div>

                        <div className="textarea-container">
                            <label style={labelStyle}>Kinh nghiệm làm việc</label>
                            <textarea className="custom-textarea"
                                name="requirements"
                                placeholder="Nhập kinh nghiệm làm việc" 
                                style={{ ...inputStyle, height: "100px" }}
                                value={formData.requirements}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>

                        <div style={{width:'100%', display:'flex', margin:'10px 0', padding:'10px',justifyContent:'flex-start'}}>
                            <input className="file-input"
                                type="file"
                                id="file-upload"
                                accept="image/*"
                                onChange={handleFileChange}
                                style={{ display: "none" }}
                            />
                            <label className="file-label"
                                htmlFor="file-upload" 
                            >
                                {selectedFile ? selectedFile.name : "Thêm tệp"}
                            </label>
                        </div>

                        <div style={{margin:'10px'}}>
                            <input style={{width: "24px", height:'auto', margin:'10px 10px 50px 0',transform:'scale(2)'}}
                                type="checkbox" 
                                id="terms"
                                name="agreedToTerms"
                                checked={formData.agreedToTerms}
                                onChange={handleInputChange}
                            />
                            <label  style={{margin:'0 10px'}}>                                
                                <span>Tôi đồng ý với điều khoản</span>
                            </label>
                            {errors.agreedToTerms && <div style={errorStyle}>{errors.agreedToTerms}</div>}
                        </div>

                        <div style={{width:'100%', display:'flex', justifyContent:'flex-end' }}>
                            <button 
                                type="submit" 
                                style={{
                                    
                                    opacity: formData.agreedToTerms ? 1 : 0.5,
                                    cursor: formData.agreedToTerms ? 'pointer' : 'not-allowed'
                                }}
                                disabled={!formData.agreedToTerms}
                            >
                                Gửi yêu cầu
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Recruitment;