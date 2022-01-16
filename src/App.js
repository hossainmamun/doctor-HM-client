import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Account from "./Components/Account/Account.js";
import AddBlogs from "./Components/Dashboard/AddBlogs.js";
import AddBookingCard from "./Components/Dashboard/AddBookingCard.js";
import AddDoctors from "./Components/Dashboard/AddDoctors.js";
import AddPatient from "./Components/Dashboard/AddPatient.js";
import Appointments from "./Components/Dashboard/Appointments.js";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Review from "./Components/Dashboard/Review.js";
import ErrorPage from "./Components/ErrorPage/ErrorPage.js";
import GetAppointment from "./Components/GetAppointment/GetAppointment.js";
import AllDoctorList from "./Components/HomePage/Doctors/AllDoctorList.js";
import HomePage from "./Components/HomePage/HomePage.js";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.js";
import Navbar from "./Components/Shared/Navbar/Navbar.js";
import './StyleSheet/Main.scss'

export const globalContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div className="Main">
      <globalContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/allDoctorList">
              <AllDoctorList />
            </Route>
            <Route to="/getAppointment">
              <GetAppointment />
            </Route>
            {/* dashboard route */}
            <Route path="/dashboard/review">
              <Review />
            </Route>
            <Route path="/dashboard/doctor">
              <AddDoctors />
            </Route>
            <Route path="/dashboard/blogs">
              <AddBlogs />
            </Route>
            <Route path="/dashboard/bookingCard">
              <AddBookingCard />
            </Route>
            <Route path="/dashboard/appointmentList">
              <AddPatient/>
            </Route>
            <Route path="/dashboard/appointment">
              <Appointments/>
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </globalContext.Provider>
    </div>
  );
}

export default App;
