import React from 'react';
import Carousel from './Carousel';



const carouselData = [
    {
        image: 'https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: 'https://images.pexels.com/photos/2769274/pexels-photo-2769274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: 'https://images.pexels.com/photos/7764/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: 'https://images.pexels.com/photos/105254/pexels-photo-105254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: 'https://images.pexels.com/photos/1038628/pexels-photo-1038628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: 'https://images.pexels.com/photos/270686/pexels-photo-270686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        prev: 5,
        id: 6,
        next: 1
    }
]

const CaroselItem = () => {
    return (
        <div className="carousel w-10/12 max-w-screen-xl mx-auto lg:pt-0 md:pt-16 pt-16">
        {
             carouselData.map(carousel => <Carousel key={carousel.id} carousel = {carousel}></Carousel>)
        }
    </div>
    );
};

export default CaroselItem;