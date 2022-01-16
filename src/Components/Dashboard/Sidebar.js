import React, { useContext, useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../../StyleSheet/Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentMedical,
  faUserMd,
  faBlog,
  faBookMedical,
  faUsers,
  faCalendar
} from "@fortawesome/free-solid-svg-icons";
import { globalContext } from "../../App.js";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(globalContext);
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    fetch('https://lit-coast-50910.herokuapp.com/admincontrol', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loggedInUser)
    })
      .then(res => res.json())
      .then(data => {
        setAdmin(data)
      })
  }, [])
  return (
    <div>
      <button class="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" style={{ fontSize: '22px' }}>Open Dashboard</button>

      <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions">
        <div class="offcanvas-header">
          <h3 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Doctor HM</h3>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body sidebar">
          <div>
            <Link to="/dashboard/appointment" className="nav-link px-0">
              <FontAwesomeIcon
                className="me-2"
                icon={faCalendar}
                style={{ color: "#000" }}
              />{" "}
              Dashboard
            </Link>
          </div>
          {
            admin &&
            <div>
              <Link to="/dashboard/appointmentList" className="nav-link px-0">
                <FontAwesomeIcon
                  className="me-2"
                  icon={faUsers}
                  style={{ color: "#000" }}
                />{" "}
                Appointments
              </Link>
            </div>
          }

          <div>
            <Link to="/dashboard/review" className="nav-link px-0">
              <FontAwesomeIcon
                className="me-2"
                icon={faCommentMedical}
                style={{ color: "#000" }}
              />{" "}
              Review
            </Link>
          </div>
          {
            admin &&
            <div>
              <div>
                <Link to="/dashboard/doctor" className="nav-link px-0">
                  <FontAwesomeIcon
                    className="me-2"
                    icon={faUserMd}
                    style={{ color: "#000" }}
                  />{" "}
                  Doctors
                </Link>
              </div>
              <div>
                <Link to="/dashboard/blogs" className="nav-link px-0">
                  <FontAwesomeIcon
                    className="me-2"
                    icon={faBlog}
                    style={{ color: "#000" }}
                  />{" "}
                  Blogs
                </Link>
              </div>
              <div>
                <Link to="/dashboard/bookingCard" className="nav-link px-0">
                  <FontAwesomeIcon
                    className="me-2"
                    icon={faBookMedical}
                    style={{ color: "#000" }}
                  />{" "}
                  Appointment Booking Card
                </Link>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
