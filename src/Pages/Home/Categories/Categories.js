import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/CategoryImages/android.png'
import img2 from '../../../assets/CategoryImages/apple.png'
import img3 from '../../../assets/CategoryImages/gaming.png'

const Categories = () => {
    return (
        <div className='lg:my-20 my-10 md:my-15'>
            <h2 className='text-2xl flex justify-center font-bold'>Categories</h2>
        <div className='flex gap-3 justify-center items-center my-5'>
            <Link to='/androids'><img className='lg:w-48 lg:h-48 w-28 h-28 md:w-36 md:h-36 p-10 border shadow-lg rounded-lg hover:bg-slate-200' src={img1} alt="" /></Link>
            <Link to='/appleproducts'><img className='lg:w-48 lg:h-48 w-28 h-28 md:w-36 md:h-36 p-10 border shadow-lg rounded-lg hover:bg-slate-200'  src={img2}alt="" /></Link>
            <Link><img className='lg:w-48 lg:h-48 w-28 h-28 md:w-36 md:h-36 p-10 border shadow-lg rounded-lg hover:bg-slate-200' src={img3} alt="" /></Link>
        </div>
        </div>
    );
};

export default Categories;