import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserReviewDisplay from './UserReviewDisplay.js';
import { HashLink as Link } from 'react-router-hash-link';


const UserReview = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('https://lit-coast-50910.herokuapp.com/reviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data)
        console.log(data)
      })
  }, [])

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    initialSlide: 0,
    cssEase: "linear",
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
    <div id='reviews' className='container div-spacing'>
      <div className='text-center mb-5'>
        <strong style={{ fontSize: '1.3rem' }}>Testimonial</strong>
        <h2>what's our patients say</h2>
      </div>
      <Slider {...settings}>
        {
          reviews.map(review => <UserReviewDisplay review={review} />)
        }
      </Slider>
      <div className='text-center mt-4'>
        <Link to="/dashboard/review">
          <button className='btn btn-outline-secondary px-4' style={{ fontSize: '1.2rem' }}>Add Review</button>
        </Link>
      </div>
    </div>
  );
};

export default UserReview;