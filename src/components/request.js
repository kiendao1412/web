import React, { useState } from 'react';
import '../App.css'
// Constants
const CITIES = ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng'];
const DISTRICTS = {
  'Hà Nội': ['Quận Ba Đình', 'Quận Hoàn Kiếm', 'Quận Tây Hồ'],
  'TP. Hồ Chí Minh': ['Quận 1', 'Quận 2', 'Quận 3'],
  'Đà Nẵng': ['Quận Hải Châu', 'Quận Sơn Trà', 'Quận Ngũ Hành Sơn']
};
const SERVICES = [
  'Giúp việc nhà',
  'Chăm sóc người già',
  'Chăm sóc trẻ em',
  'Nấu ăn',
  'Vệ sinh'
];

const Request = () => {
  // States
  const errorStyle = {
    color: 'red',
    fontSize: '12px',
    marginBottom: '5px'
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    city: '',
    district: '',
    ward: '',
    address: '',
    service: '',
    salary: '',
    requirements: '',
    agreedToTerms: false
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    city: '',
    district: '',
    service: '',
    salary: '',
    agreedToTerms: ''
  });

  const [districts, setDistricts] = useState([]);

  // Handlers
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));

    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'city') {
      setDistricts(DISTRICTS[value] || []);
      setFormData(prevState => ({
        ...prevState,
        district: '',
        ward: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Vui lòng nhập tên';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Vui lòng nhập email';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Số điện thoại không hợp lệ (10 chữ số)';
      isValid = false;
    }

    if (!formData.gender) {
      newErrors.gender = 'Vui lòng chọn giới tính';
      isValid = false;
    }

    if (!formData.city) {
      newErrors.city = 'Vui lòng chọn thành phố';
      isValid = false;
    }

    if (!formData.district) {
      newErrors.district = 'Vui lòng chọn quận/huyện';
      isValid = false;
    }

    if (!formData.service) {
      newErrors.service = 'Vui lòng chọn dịch vụ';
      isValid = false;
    }

    if (!formData.salary) {
      newErrors.salary = 'Vui lòng nhập mức lương';
      isValid = false;
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = 'Vui lòng đồng ý với điều khoản';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form data:', formData);
      alert('Yêu cầu của bạn đã được gửi!');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        gender: '',
        city: '',
        district: '',
        ward: '',
        address: '',
        service: '',
        salary: '',
        requirements: '',
        agreedToTerms: false
      });
      setDistricts([]);
    }
  };

  return (
    <div style={{marginTop:'100px'}}>
      <div className="requestImg">
        <img src="/api/placeholder/800/400" alt="Request header" />
      </div>
      
      <h2 style={{textAlign:'center'}}>Gửi yêu cầu tìm giúp việc</h2>
      <div className="request">
        
        <div className="requestText">
          <h4>Liên hệ với chúng tôi</h4>
          <p>
            Et itaque recusandae id voluptate quia rem voluptatibus quasi asgrhxef quas voluptatem. 
            Ut facilis fefherror a saepe repellat et odiabvzo fscumque qui quia deserunt qui soluta nulla sed pariatur 
          </p>
          <p>Địa chỉ: 123 Giải Phóng, Hoàng Mai, Hà Nội</p>
          <p>Điện thoại: 0912312315</p>
          <p>Email: gvbm@gmail.com</p>
        </div>

        <div className="requestForm">
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className='input'>
              <label>Tên</label>
              <input 
                type="text" 
                name="name"
                placeholder="Nhập tên" 
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <div style={errorStyle}>{errors.name}</div>}
            </div>

            {/* Email Input */}
            <div className='input'>
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                placeholder="abc@gmail.com" 
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <div style={errorStyle}>{errors.email}</div>}
            </div>

            {/* Phone Input */}
            <div className='input'>
              <label>Số điện thoại</label>
              <input 
                type="tel" 
                name="phone"
                placeholder="Nhập số điện thoại" 
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && <div style={errorStyle}>{errors.phone}</div>}
            </div>

            {/* Gender Input */}
            <div style={{ width:'100%'}}>
              
              <div className='gender'>
                <div className='genderCheck'>
                  <input className='radio'
                    type="radio" 
                    id="male" 
                    name="gender" 
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="male">Nam</label>
                </div>
                
                <div className='genderCheck'>
                  <input className='radio'
                    type="radio" 
                    id="female" 
                    name="gender" 
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="female">Nữ</label>
                </div>
              </div>
              {errors.gender && <div style={errorStyle}>{errors.gender}</div>}
            </div>

            {/* Address Inputs */}
            <div className='address'>
              <label>Địa chỉ</label>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <select className='custom-select'
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                >
                  <option value="">Chọn Thành phố</option>
                  {CITIES.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>

                <select className='custom-select'
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  disabled={!formData.city}
                >
                  <option value="">Chọn Quận/Huyện</option>
                  {districts.map(district => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>

                <select className='custom-select'
                  name="ward"
                  value={formData.ward}
                  onChange={handleInputChange}
                  disabled
                >
                  <option value="">Phường/Xã</option>
                </select>
              </div>
              {errors.city && <div style={errorStyle}>{errors.city}</div>}
              {errors.district && <div style={errorStyle}>{errors.district}</div>}
              
              <input style={{
                
                width:'95%'
              }}
                type="text" 
                name="address"
                placeholder="Địa chỉ cụ thể" 
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>

            {/* Service Selection */}
            <div className='input'>
              <label>Chọn dịch vụ</label>
              <select className='custom-select'
                name="service"
                value={formData.service}
                onChange={handleInputChange}
              >
                <option value="">Chọn dịch vụ</option>
                {SERVICES.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
              {errors.service && <div style={errorStyle}>{errors.service}</div>}
            </div>

            {/* Salary Input */}
            <div className='input'>
              <label>Mức lương trả cho người lao động</label>
              <input 
                type="number" 
                name="salary"
                placeholder="Nhập mức lương" 
                value={formData.salary}
                onChange={handleInputChange}
              />
              {errors.salary && <div style={errorStyle}>{errors.salary}</div>}
            </div>

            {/* Requirements Input */}
            <div className="textarea-container">
              <label>Yêu cầu đối với người lao động</label>
              <textarea className="custom-textarea"
                name="requirements"
                placeholder="Nhập yêu cầu" 
                value={formData.requirements}
                onChange={handleInputChange}
              />
            </div>

            {/* Terms Agreement */}
            <div>
              <input style={{width: "24px", height:'auto', margin:'10px 10px 50px 0',transform:'scale(2)'}}
                type="checkbox" 
                id="terms"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleInputChange}
              />
              <label htmlFor="terms" style={{margin:'0 10px'}}>Tôi đồng ý với điều khoản</label>
              {errors.agreedToTerms && <div style={errorStyle}>{errors.agreedToTerms}</div>}
            </div>

            {/* Submit Button */}
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

export default Request;