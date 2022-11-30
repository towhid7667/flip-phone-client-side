import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AndroidInfo from './AndroidInfo';

const Android = () => {
    const androids = useLoaderData()
    return (
        <div className='w-10/12 mx-auto'>
            <div className='py-10 lg:h-screen md:h-[300px] flex flex-col justify-center items-center bg-cover bg-[url("https://cdn.pixabay.com/photo/2019/11/05/00/53/cellular-4602489_960_720.jpg")]'>
                <h1 className='text-white font-bold lg:text-[150px] text-5xl'>Android</h1>
                <p className='text-1xl font-semibold text-gray-200 lg:w-1/2 w-3/4 my-2 text-center'>Screen readers, voice access, speech-to-text, talk back and lookout are some of the newest ways to experience the world with Android’s new accessibility features.</p>
            </div>
            <div className='flex justify-center items-center flex-wrap gap-5 my-10'>
            {
                androids.map(android => <AndroidInfo key = {android._id} android = {android}></AndroidInfo>)
            }
            </div>
        </div>
    );
};

export default Android;