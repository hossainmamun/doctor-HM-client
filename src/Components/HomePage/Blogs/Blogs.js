import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogsDisplay from './BlogsDisplay.js';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('https://lit-coast-50910.herokuapp.com/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(data)
      })
  }, [])
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
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
    <div id='blogs' className='container div-spacing'>
      <div className='text-center mb-5'>
        <strong style={{ fontSize: '1.3rem' }}>Blogs</strong>
        <h2>Blogs from our expert</h2>
      </div>
      <Slider {...settings}>
        {
          blogs.map(blog => <BlogsDisplay blog={blog} />)
        }
      </Slider>
    </div>
  );
};

export default Blogs;