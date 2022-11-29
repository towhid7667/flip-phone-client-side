import React from 'react';
import BeastDeals from './BestDeal/BeastDeals';
import CaroselItem from './Carousel/CaroselItem';
import Categories from './Categories/Categories';
import HomeHero from './HomeHero';

const Home = () => {
    return (
        <div>
            <CaroselItem></CaroselItem>
            <Categories></Categories>
            <BeastDeals></BeastDeals>
            <HomeHero></HomeHero>
        </div>
    );
};

export default Home;