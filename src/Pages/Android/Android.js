import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AndroidInfo from './AndroidInfo';

const Android = () => {
    const androids = useLoaderData()
    return (
        <div className='flex justify-center flex-wrap gap-5 my-10'>
            {
                androids.map(android => <AndroidInfo key = {android._id} android = {android}></AndroidInfo>)
            }
        </div>
    );
};

export default Android;