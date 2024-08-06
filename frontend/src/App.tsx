// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import DonorRegistration from './pages/DonorRegistration';
// import BloodRequest from './pages/BloodRequest'
// import HospitalList from './pages/Blood-Banks';
// import BloodBanks from './pages/Blood-Banks';
// import HospitalDetail from './pages/HospitalDetails';
// import Login from './pages/Login';
// import Dashboard from './pages/admin/Dashboard';
// import Layout from './pages/admin/Layout';




// const App=() =>{
//   return (
//     <Router>
//       <Routes>
//       <Route path="/" element={<Layout />} />
//         <Route path='/dashboard' element={<Dashboard/>}/>
//       </Routes>


//       <Routes>
//       <Route path="/" element={<Home />} />
//         <Route path="/donor-registration" element={<DonorRegistration />} />
//         <Route path="/request-blood" element={<BloodRequest/>} />
//         <Route path='/blood-banks' element={<BloodBanks/>}/>
//         <Route path="/hospital-details" element={<HospitalDetail/>}/>
//         <Route path="/admin-login" element={<Login/>}/>
        
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Layout from './pages/admin/Layout';
import Dashboard from './pages/admin/Dashboard';
import Home from './pages/Home';
import DonorRegistration from './pages/DonorRegistration';
import BloodRequest from './pages/BloodRequest';
import BloodBanks from './pages/Blood-Banks';
import HospitalDetail from './pages/HospitalDetails';
import Login from './pages/Login';
import AllHospital from './pages/admin/AllHospital';
import AddHospital from './pages/admin/AddHospital';
import Requests from './pages/admin/Requests';
import Donors from './pages/admin/Donors';

const App = () => {
  const token = sessionStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={token ? <Layout /> : <Navigate to="/admin-login" />}>
          <Route path="/admin/dashboard" element={token ? <Dashboard /> : <Navigate to="/admin-login" />} />
          <Route path="/admin/all-hospitals" element={token ? <AllHospital /> : <Navigate to="/admin-login" />} />
          <Route path="/admin/add-hospitals" element={token ? <AddHospital /> : <Navigate to="/admin-login" />} />
          <Route path="/admin/requests" element={token ? <Requests /> : <Navigate to="/admin-login" />} />
          <Route path="/admin/all-donors" element={token ? <Donors /> : <Navigate to="/admin-login" />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/donor-registration" element={<DonorRegistration />} />
        <Route path="/request-blood" element={<BloodRequest />} />
        <Route path="/blood-banks" element={<BloodBanks />} />
        <Route path="/hospital-details" element={<HospitalDetail />} />
        <Route path="/admin-login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
