import React, { useState, useCallback } from 'react';
const jobs = [
  {
    id: 1,        
    title: 'Nhân viên phục vụ',
    img: '/images/service.jpg',
    date: '20/02/2025',
    place: 'Hà Nội',
    salary: '8-10 triệu',
    type: 'Toàn thời gian',
    status: 'Đang tuyển',
    generalInformation: 'Nhà hàng 5 sao tại Hà Nội',
    jobDescription: 'Phục vụ khách hàng, setup bàn ăn...',
    require: 'Tốt nghiệp THPT trở lên, ngoại hình ưa nhìn'
  },
  
];
const activities = [
  {        
    id:1,
    title: 'Nhân viên phục vụ',
    img: '/images/service.jpg',
    date: '20/02/2025',
    smallText:"",
    content:['','']
  },
  
];

const locations = [
  { value: 'hanoi', label: 'Hà Nội' },
  { value: 'hcm', label: 'Hồ Chí Minh' },
  { value: 'danang', label: 'Đà Nẵng' }
];

const serviceTypes = [
  { value: 'hotel', label: 'Khách sạn' },
  { value: 'restaurant', label: 'Nhà hàng' },
  { value: 'spa', label: 'Spa' }
];

export {jobs, activities, locations, serviceTypes};