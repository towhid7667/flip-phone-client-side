import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestDeal from './BestDeal';

const BeastDeals = () => {

    const [deals, setdeals] = useState([]);

    useEffect(() => {
        fetch('https://flip-phone-server-towhid7667.vercel.app/allproducts/bestdeal')
        .then(res => res.json())
        .then(data => setdeals(data))
    }, [])
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
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
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 912,
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
      }
    return (
        <div className='w-11/12 md:w-11/12 lg:w-10/12 2xl:w-8/12 mx-auto my-10  bg-light overflow-hidden' >
            <h2 className='text-2xl flex justify-center font-bold'>Best Deals</h2>
              <Slider {...settings}>
               
                {
                    deals.map(deal =><div className='p-8'><BestDeal deal ={deal}></BestDeal></div>)
                }
                
              </Slider>
        </div>
    );
};

export default BeastDeals;