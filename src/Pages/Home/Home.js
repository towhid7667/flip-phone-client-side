import React from 'react';
import BeastDeals from './BestDeal/BeastDeals';
import Carousel from './Carousel';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Categories></Categories>
            <BeastDeals></BeastDeals>
        </div>
    );
};

export default Home;