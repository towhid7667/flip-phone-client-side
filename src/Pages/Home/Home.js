import React from 'react';
import BeastDeals from './BestDeal/BeastDeals';
import Carousel from './Carousel';
import Categories from './Categories/Categories';
import HomeHero from './HomeHero';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Categories></Categories>
            <BeastDeals></BeastDeals>
            <HomeHero></HomeHero>
        </div>
    );
};

export default Home;