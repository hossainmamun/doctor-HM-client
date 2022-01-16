import React from "react";
import { useLocation } from "react-router-dom";
import AddBlogs from "./AddBlogs.js";
import AddBookingCard from "./AddBookingCard.js";
import AddDoctors from "./AddDoctors.js";
import AddPatient from "./AddPatient.js";
import Appointments from "./Appointments.js";
import Review from "./Review.js";
import Sidebar from "./Sidebar.js";

const Dashboard = () => {
  const currentLocation = useLocation();
  document.title = 'Doctor HM/dashboard'
  return (
    <div className="container-fluid pt-5">
      <div className="mt-5">
        <Sidebar />
      </div>
      <div className="container">
        {currentLocation.pathname === "/dashboard" && <Appointments />}
        {currentLocation.pathname === "/dashboard/appointment" && <Appointments />}
        {currentLocation.pathname === "/dashboard/appointmentList" && <AddPatient />}
        {currentLocation.pathname === "/dashboard/review" && <Review />}
        {currentLocation.pathname === "/dashboard/doctor" && <AddDoctors />}
        {currentLocation.pathname === "/dashboard/blogs" && <AddBlogs />}
        {currentLocation.pathname === "/dashboard/bookingCard" && (
          <AddBookingCard />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
