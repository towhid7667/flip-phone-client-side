import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppleProduct from './AppleProduct';

const AppleProducts = () => {
    const appleProducts = useLoaderData()
    return (
        <div className='w-10/12 mx-auto'>
        <div className='py-10 lg:h-screen flex flex-col gap-3 justify-center items-center bg-cover bg-[url("https://cdn.pixabay.com/photo/2016/11/19/22/53/apple-1841553_960_720.jpg")]'>
            <h1 className='text-white font-bold lg:text-[150px] text-5xl'>Apple</h1>
            <p className='text-1xl font-semibold text-gray-200 lg:w-1/2 w-3/4 my-2 text-center'>Screen readers, voice access, speech-to-text, talk back and lookout are some of the newest ways to experience the world with Android’s new accessibility features.</p>
        </div>
        <div className='flex justify-center items-center flex-wrap gap-5 my-10'>
        {
            appleProducts.map(appleProduct => <AppleProduct key={appleProduct._id} appleProduct = {appleProduct}></AppleProduct>)
        }
        </div>
    </div>
    );
};

export default AppleProducts;