import React, { useState, useCallback } from 'react';
const jobs = [
  {
    id: 1,
    name: "Giúp việc tại nhà",        
    title: 'Nhân viên phục vụ',
    img: '../img/act1.png',
    date: '20/02/2025',
    place: 'Hà Nội',
    salary: '8-10 triệu',
    type: 'Toàn thời gian',
    status: 'Đang tuyển',
    description: ['Công việc nội trợ, lau dọn', 'Chăm sóc em bé', 'Chăm sóc các cụ già'],
    generalInformation: 'Nhà hàng 5 sao tại Hà Nội',
    jobDescription: 'Công việc nội trợ, lau dọn, chăm sóc em bé, chăm sóc các cụ già',
    require: 'Tốt nghiệp THPT trở lên, ngoại hình ưa nhìn'
  },
  {
    id: 2,        
    name: "Giúp việc theo giờ",
    title: "Giúp việc theo giờ",
    img: "../img/act2.png",
    date: '20/02/2025',
    place: 'Hà Nội',
    salary: '8-10 triệu',
    type: 'Toàn thời gian',
    status: 'Đang tuyển',
    generalInformation: 'Nhà hàng 5 sao tại Hà Nội',
    description: ['Lau dọn nhà cửa', 'Giặt giũ quần áo', 'Phụ giúp gia đình các ngày lễ'],
    jobDescription: 'Lau dọn nhà cửa, giặt giũ quần áo, phụ giúp gia đình các ngày lễ',
    require: 'Tốt nghiệp THPT trở lên, ngoại hình ưa nhìn'
  },
  {
    id: 3,        
    name: "Chăm sóc bệnh nhân",
    title: "Chăm sóc bệnh nhân",
    img: "../img/act3.png",
    date: '20/02/2025',
    place: 'Hà Nội',
    salary: '8-10 triệu',
    type: 'Toàn thời gian',
    status: 'Đang tuyển',
    description: ['Chăm sóc các bệnh nhân tại các bệnh viện nội trú'],
    generalInformation: 'Nhà hàng 5 sao tại Hà Nội',
    jobDescription: 'Chăm sóc các bệnh nhân tại các bệnh viện nội trú',
    require: 'Tốt nghiệp THPT trở lên, ngoại hình ưa nhìn'
  },
  {
    id: 4,        
    name: "Giúp việc Tết Nguyên đán",
    title: "Giúp việc Tết Nguyên đán",
    img: "../img/act4.png",
    date: '20/02/2025',
    place: 'Hà Nội',
    salary: '8-10 triệu',
    type: 'Toàn thời gian',
    status: 'Đang tuyển',
    description: ['Giúp việc gia đình trong Ngày Tết Âm lịch'],
    generalInformation: 'Nhà hàng 5 sao tại Hà Nội',
    jobDescription: 'Giúp việc gia đình trong Ngày Tết Âm lịch',
    require: 'Tốt nghiệp THPT trở lên, ngoại hình ưa nhìn'
  },
];
const activities = [
  {        
    id:1,
    name: "Hoạt động tháng 12",
    title: "Hoạt động tháng 12",
    img: "../img/ser1.png",
    date: '20/02/2025',
    smallText:"",
    content:['',''],
    description: 'Mô tả hoạt động tháng 12 của công ty.'
  },
  {        
    id:2,
    name: "Hoạt động tháng 12",
    title: "Hoạt động tháng 12",
    img: "../img/ser2.png",
    date: '20/02/2025',
    smallText:"",
    content:['',''],
    description: 'Mô tả hoạt động tháng 12 của công ty.'
  },
  {        
    id:3,
    name: "Hoạt động tháng 12",
    title: "Hoạt động tháng 12",
    img: "../img/ser3.png",
    date: '20/02/2025',
    smallText:"",
    content:['',''],
    description: 'Mô tả hoạt động tháng 12 của công ty.'
  },
];
const serviceData = {
  housekeeping: {
      title: "Giúp việc nhà",
      cards: [
          {
              title: "Hợp đồng dài hạn",
              price: "1.800.000/Hợp đồng",
              description: "Et itaque recusandae id voluptate quia rem voluptatibus quasi a quas voluptatem. Ut facilis error a saepe repellat et odio cumque qui quia deserunt qui soluta nulla sed pariatur velit non culpa alias."
          },
          {
              title: "Hợp đồng theo ngày",
              price: "400.000/Ngày",
              description: "Et itaque recusandae id voluptate quia rem voluptatibus quasi a quas voluptatem. Ut facilis error a saepe repellat et odio cumque qui quia deserunt qui soluta nulla sed pariatur velit non culpa alias."
          }
      ]
  },
  patientCare: {
      title: "Chăm người bệnh",
      cards: [
          {
              title: "Y tá/Điều dưỡng tại nhà",
              price: "Liên hệ",
              description: "Et itaque recusandae id voluptate quia rem voluptatibus quasi a quas voluptatem. Ut facilis error a saepe repellat et odio cumque qui quia deserunt qui soluta nulla sed pariatur velit non culpa alias."
          },
          {
              title: "Hợp đồng giới thiệu",
              price: "1.000.000/Hợp đồng",
              description: "Et itaque recusandae id voluptate quia rem voluptatibus quasi a quas voluptatem. Ut facilis error a saepe repellat et odio cumque qui quia deserunt qui soluta nulla sed pariatur velit non culpa alias."
          }
      ]
  },
  hourlyService: {
      title: "Giúp việc theo giờ",
      cards: [
          {
              title: "Hợp đồng theo giờ",
              price: "50.000/Giờ",
              description: "Et itaque recusandae id voluptate quia rem voluptatibus quasi a quas voluptatem. Ut facilis error a saepe repellat et odio cumque qui quia deserunt qui soluta nulla sed pariatur velit non culpa alias."
          }
      ]
  },
  tetService: {
      title: "Giúp việc Tết Nguyên Đán",
      cards: [
          {
              title: "Hợp đồng 10 ngày Tết",
              price: "1.500.000/Hợp đồng",
              description: "Et itaque recusandae id voluptate quia rem voluptatibus quasi a quas voluptatem. Ut facilis error a saepe repellat et odio cumque qui quia deserunt qui soluta nulla sed pariatur velit non culpa alias."
          }
      ]
  }
};

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

export {jobs, activities, locations, serviceTypes,serviceData};