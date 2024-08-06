import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { urlPath } from "../utils/urlPath";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar=()=> {
  const navigate = useNavigate();


  const [isHotelConfigOpen, setIsHotelConfigOpen] = useState(false);
  const toggleHotelConfig = () => {
    setIsHotelConfigOpen(!isHotelConfigOpen);
  };

  const [showDepartment, setShowDepartment] = useState(false);
  const toggleDepartment = () => {
    setShowDepartment(!showDepartment);
  };

  const [showBookings, setShowBookings] = useState(false);
  const toggleBookings = () => {
    setShowBookings(!showBookings);
  };


  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section:any) => {
    setOpenSection(openSection === section ? null : section);
    if (openSection === section) {
      navigate("/admin/dashboard");
    }
    
  };
  const resetOpenSection = () => {
    setOpenSection(null);
    
  };
  return (
    <div className="flex flex-col w-48 bg-customBlack text-black h-screen">
        <div className="flex items-center justify-center mt-1">
          <a className="navbar-brand" href="/">
            <img className="h-8  " src="https://templates.bwlthemes.com/blood_donation_preview/images/logo.png" alt="Blood Bank Management System" />
            </a> </div>
      <div className=" bg-white  flex items-center justify-center h-10 bg-customBlackFade">
        
        <h1 className="text-sm font-bold">Admin</h1>
      </div>

      <NavLink
        to="/admin/dashboard"
        className={`flex items-center p-3 hover:bg-customGreenfade cursor-pointer transition-all duration-300 ${openSection === null ? "bg-customGreen" : ""
          }`}
        onClick={resetOpenSection}
      >
        <img
          src={`${urlPath.icon}dashboard.png`}
          className="w-5 h-5 cursor-pointer object-cover"
        />
        <span className="text-sm ml-4">Dashboard</span>
      </NavLink>
      <div className="">


        <div
          className={`p-3 flex items-center justify-between ${openSection === "hotelConfig" ? 'bg-customGreen' : ''
            } hover:bg-customGreenfade cursor-pointer transition-all duration-200`}
          onClick={() => toggleSection("hotelConfig")}
        >
          <img
            src={`${urlPath.icon}hotelconfig.png`}
            className="w-5 h-5 cursor-pointer object-cover"
            alt="Hotel Config Icon"
          />
          <span className="text-sm">Hospitals</span>
          {openSection === "hotelConfig" ? (
            <ChevronUpIcon className="h-5 w-5 ml-0 text-black" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 ml-0 text-black" />
          )}
        </div>

        {openSection === "hotelConfig" && (
          <div className="ml-4 mt-2 flex flex-col">
            {/* Add items for Hotel Configuration */}


            <NavLink to="/admin/all-hospitals" className={({ isActive }) => `${isActive ? "text-customGreen" : ""}
            flex items-center mb-1 ml-7`}    >
              <img
                src={`${urlPath.icon}rooms.png`}
                className="w-5 h-5 mr-2 cursor-pointer object-cover"
                alt="Rooms Icon"
              />
              <span className="text-xs p-1 hover:text-customGreen">All Hospitals</span>
            </NavLink>

            <NavLink to="/admin/add-hospitals" className={({ isActive }) => `${isActive ? "text-customGreen" : ""}
            flex items-center mb-1 ml-7`}    >
              <img
                src={`${urlPath.icon}roomtype.png`}
                className="w-5 h-5 mr-2 cursor-pointer object-cover"
                alt="Rooms Icon"
              />
              <span className="text-xs p-1 hover:text-customGreen">Add Hospitals</span>
            </NavLink>


           

          </div>
        )}


      </div>
      <div>
        <div
          className={`p-3 flex items-center justify-between ${openSection === "department" ? 'bg-customGreen' : ''
            } hover:bg-customGreenfade cursor-pointer transition-all duration-200`}
          onClick={() => toggleSection("department")}
        >
          <img
            src={`${urlPath.icon}department.png`}

            className="w-5 h-5 cursor-pointer object-cover"

          />
          <span className="text-sm ">Donors</span>
          {openSection === "department" ? (
            <ChevronUpIcon className="h-5 w-5 ml-6 text-black" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 ml-6 text-black" />
          )}
        </div>
        {openSection === "department" && (
          <div className="ml-4 mt-2 flex flex-col">
            {/* Add items for Department */}



            <NavLink to="/admin/all-donors" className={({ isActive }) => `${isActive ? "text-customGreen" : ""}
            flex items-center mb-1 ml-7`}    >
              <img
                src={`${urlPath.icon}department1.png`}
                className="w-5 h-5 mr-2 cursor-pointer object-cover"
              />
              <span className="text-xs  ml-0 p-1 hover:text-customGreen">All Donors</span>
            </NavLink>


            <NavLink to="/employees" className={({ isActive }) => `${isActive ? "text-customGreen" : ""}
            flex items-center mb-1 ml-7`}    >
              <img
                src='../public/logo192.png'
                className="w-5 h-5 mr-2 cursor-pointer object-cover"
              />
              <span className="text-xs  ml-0 p-1 hover:text-customGreen ">Pending Donors Request</span>
            </NavLink>
          </div>
        )}

<NavLink
        to="/admin/requests"
        className={`flex items-center p-3 hover:bg-customGreenfade cursor-pointer transition-all duration-300 ${openSection === null ? "bg-customGreen" : ""
          }`}
        onClick={resetOpenSection}
      >
        <img
          src={`${urlPath.icon}dashboard.png`}
          className="w-5 h-5 cursor-pointer object-cover"
        />
        <span className="text-sm ml-4">Requests</span>
      </NavLink>
      </div>
      <div>
        

       
      </div>
    </div>
  );
}

export default Sidebar;
