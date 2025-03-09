import HomePage from  '../components/home_page'
import Service from  '../components/service'
import Request from  '../components/request'
import Recruitment from  '../components/recruitment'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Agreement from '../components/agreement'
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import JobDetail from '../components/jobDetail'
import ActiveDetail from '../components/activitiesDetail'
import JobList from '../components/jobList'
import Activities from '../components/activities'
const Home = () =>{
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route path="/service" element={<Service/>} />
                <Route path="/request" element={<Request/>} />
                
                <Route path="/jobList" element={<JobList/>} />
                <Route path="/apply" element={<Recruitment/>} />
                <Route path="/jobList/:id" element={<JobDetail/>} />
                <Route path="/agreement" element={<Agreement />} />
                 
                <Route path="/activities" element={<Activities/>} />  
                <Route path="/activities/:id" element={<ActiveDetail />} />            
            </Routes>
            <Footer/>
        </div>
    );

};
export default Home;