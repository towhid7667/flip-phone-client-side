import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCategories from '../Home/Categories/AllCategories';
import Gamingphone from './Gamingphone';

const GamingPhones = () => {
    const gamingphones = useLoaderData()
    return (
        <div className='w-10/12 mx-auto'>
        <div className='py-10 lg:h-screen md:h-[300px] flex flex-col gap-3 justify-center items-center bg-cover bg-[url("https://images.pexels.com/photos/4293307/pexels-photo-4293307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>
            <h1 className='text-white font-bold lg:text-[150px] text-5xl text-center'>Gaming <br /> Phone</h1>
            <p className='text-1xl font-semibold text-gray-200 lg:w-1/2 w-3/4 my-2 text-center'>Screen readers, voice access, speech-to-text, talk back and lookout are some of the newest ways to experience the world with Android’s new accessibility features.</p>
        </div>
        <div className='flex justify-center items-center flex-wrap gap-5 my-10'>
        {
            gamingphones.map(gamingphone => <Gamingphone key={gamingphone._id} gamingphone = {gamingphone}></Gamingphone>)
        }
        <AllCategories></AllCategories>
        </div>

    </div>
    );
};

export default GamingPhones;