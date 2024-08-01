import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import DonorRegistration from './pages/DonorRegistration';
import BloodRequest from './pages/BloodRequest'
import HospitalList from './pages/Blood-Banks';
import BloodBanks from './pages/Blood-Banks';
import HospitalDetail from './pages/HospitalDetails';
import Login from './pages/Login';



const App=() =>{
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/donor-registration" element={<DonorRegistration />} />
        <Route path="/request-blood" element={<BloodRequest/>} />
        <Route path='/blood-banks' element={<BloodBanks/>}/>
        <Route path="/hospital-details" element={<HospitalDetail/>}/>
        <Route path="/admin-login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
