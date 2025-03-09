import React, { useState, useCallback } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {jobs, locations, serviceTypes} from '../data/data.js'
import '../App.css'
const SearchForm = () => {
  const [formData, setFormData] = useState({
    searchQuery: "",
    location: "",
    serviceType: "",
    priceRange: { min: '', max: '' }
  });
  const onInputChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);
  
  const onPriceChange = useCallback((field, value) => {
    setFormData((prev) => ({
      ...prev,
      priceRange: { ...prev.priceRange, [field]: value }
    }));
  }, []);
  
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Tìm kiếm với thông tin:", formData);
  };
  return (
    <div className="search">
      
      <form onSubmit={onSubmit}>
        <div className='searchbox'>
          <label htmlFor="search">Tìm kiếm</label>
          <input
            id="search"
            type="text"
            placeholder="Nhập từ khóa tìm kiếm..."
            value={formData.searchQuery}
            onChange={(e) => onInputChange('searchQuery', e.target.value)}
          />
        </div>

        <div className='searchbox'>
          <label htmlFor="location">Địa điểm</label>
          <select
            id="location"
            value={formData.location}
            onChange={(e) => onInputChange('location', e.target.value)}
          >
            <option value="">Chọn địa điểm</option>
            {locations.map(loc => (
              <option key={loc.value} value={loc.value}>
                {loc.label}
              </option>
            ))}
          </select>
        </div>

        <div className='searchbox'>
          <label htmlFor="serviceType">Loại hình dịch vụ</label>
          <select
            id="serviceType"
            value={formData.serviceType}
            onChange={(e) => onInputChange('serviceType', e.target.value)}
          >
            <option value="">Chọn loại hình dịch vụ</option>
            {serviceTypes.map(service => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>

        <div className='searchbox'>
          <label>Mức giá</label>
          <div className="price-range-container">
            <input
              className="price-input"
              type="text"
              placeholder="Giá thấp nhất"
              value={formData.priceRange.min}
              onChange={(e) => onPriceChange('min', e.target.value)}
              
            />
            <input
              className="price-input"
              type="text"
              placeholder="Giá cao nhất"
              value={formData.priceRange.max}
              onChange={(e) => onPriceChange('max', e.target.value)}
              
            />
          </div>
        </div>

        <button type="submit">Tìm kiếm</button>
      </form>
    </div>
  );
};


// Tách thành component riêng cho card công việc
const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <Link to={`/jobList/${job.id}`} className="button">
        <div className="job-link">
          <img src={job.img || "/placeholder.png"} alt={job.title} width="150" />
          <div className="job-details">
            <h3>{job.title}</h3>              
            <span>Địa điểm: {job.place}</span>
            <span>Mức lương: {job.salary}</span>
            <span>Loại hình: {job.type}</span>              
          </div>              
        </div> 
      </Link>
      <div>
        <button >
          Ứng tuyển
        </button>
      </div>
    </div>
  );
};

const JobList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = Object.values(jobs).slice(indexOfFirstJob, indexOfLastJob);
  const [formData, setFormData] = useState({
    searchQuery: "",
    location: "",
    serviceType: "",
    priceRange: { min: 0, max: 0 }
  });
  const onInputChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);
  
  const onPriceChange = useCallback((field, value) => {
    setFormData((prev) => ({
      ...prev,
      priceRange: { ...prev.priceRange, [field]: value }
    }));
  }, []);
  
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Tìm kiếm với thông tin:", formData);
  };
  return (
    
    <div>
      <div className='job'>
        <SearchForm 
          formData={formData}
          handleInputChange={onInputChange}
          handlePriceChange={onPriceChange}
          handleSubmit={onSubmit}
          locations={locations}
          serviceTypes={serviceTypes}
        />
        
        <div className="joblist">
          <h1>Danh sách công việc</h1>
          {currentJobs.map(job => <JobCard key={job.id} job={job} />)}
          <div className="pagination">
            {Array.from({ length: Math.ceil(jobs.length / jobsPerPage) }, (_, i) => (
              <button key={i + 1} onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </button>
            ))}
          </div>
        </div>
        
      </div>
      
    </div>
    
  );
};

// Thêm PropTypes
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onPriceChange: PropTypes.func.isRequired,
};

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    date: PropTypes.string,
    place: PropTypes.string,
    salary: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default JobList;
