import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import DoctorsDisplay from './DoctorsDisplay.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([])
  useEffect(() => {
    fetch('https://lit-coast-50910.herokuapp.com/doctors')
      .then(res => res.json())
      .then(data => {
        setDoctors(data)
      })
  }, [])

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    initialSlide: 0,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='container div-spacing'>
      <div className='text-center mb-5'>
        <strong style={{ fontSize: '1.2rem' }}>Doctors</strong>
        <h2>Our Specialists</h2>
      </div>
      <div className="row">
        <Slider {...settings}>
          {
            doctors.map(doctor => <DoctorsDisplay doctor={doctor} />)
          }
        </Slider>
      </div>
      <div className='text-center mt-5'>
        <Link to="/allDoctorList">
          <button className='btn btn-outline-dark px-4'>See More Doctor</button>
        </Link>
      </div>
    </div>
  );
};

export default Doctors;