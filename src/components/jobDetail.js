import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/data.js";
import React from 'react';
import '../App.css'
const JobDetail = () => {
  const { id } = useParams();
  const job = jobs.find((item) => item.id === parseInt(id));

  if (!job) return <h2>Không tìm thấy tin tuyển dụng</h2>;

  // Lọc danh sách công việc tương tự (không trùng với công việc hiện tại)
  const similarJobs = jobs.filter((item) => item.id !== job.id).slice(0, 3);

  return (
    <div style={{marginTop:'100px'}}>
      <img src={job.image || "/placeholder.png"} alt={job.title} width="100%" />
      
      <div className="jobdes">
        <img src={job.img || "/placeholder.png"} alt={job.title} width="150" />
        <div className="jobdesText">
          <h4>{job.title}</h4>
          <span>{job.date}</span>
          <span>{job.place}</span>
          <span>{job.salary}</span>
          <span>{job.type}</span>
        </div>
        <div>
          <button >
            Ứng tuyển
          </button>
        </div>
      </div>

      <div style={{display:'flex', width:'85%', alignItems:'flex-start', margin:'80px auto', justifyContent:'space-between'}}>
        <div className="jobDetail">
          <h3>Chi tiết công việc</h3>
          <div className="jobDetailText">
            <div>
            <h4>Thông tin chung</h4>
            <span>{job.generalInformation}</span>
            </div>

            <div>
            <h4>Mô tả công việc</h4>
            <span>{job.jobDescription}</span>
            </div>

            <div>
            <h4>Yêu cầu</h4>
            <span>{job.require}</span>
            </div>

            <div>
            <h4>Mức lương đề xuất</h4>
            <span>{job.salary}</span>
            </div>
          </div>
        </div>

        <div className="similarJob">
          <h3>Việc làm tương tự</h3>
          {jobs.map((job) => (
            <div key={job.id} className="similarJobItem"> 
              <Link to={`/jobList/${job.id}`} className="button">
                <div className="simJob">
                  <h4>{job.title}</h4>
                  
                  <span>{job.place}</span>
                  <span>{job.salary}</span>
                  <span>{job.type}</span>
                </div>
              </Link>
            </div>
          ))}
          <Link to={'/jobList'}><span>Hiển thị thêm</span></Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
