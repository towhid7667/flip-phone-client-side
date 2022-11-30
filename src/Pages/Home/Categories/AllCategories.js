import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/CategoryImages/android.png'
import img2 from '../../../assets/CategoryImages/apple.png'
import img3 from '../../../assets/CategoryImages/gaming.png'

const AllCategories = () => {
    return (
        <div className='lg:my-20 my-10 md:my-15'>
    <div className='flex lg:flex-col flex-row gap-3 justify-center items-center my-5'>
        <Link to='/androids'><img className='lg:w-28 lg:h-28 w-28 h-28 md:w-36 md:h-36 p-10 border shadow-lg rounded-lg hover:bg-slate-200' src={img1} alt="" /></Link>
        <Link to='/appleproducts'><img className='lg:w-28 lg:h-28 w-28 h-28 md:w-36 md:h-36 p-10 border shadow-lg rounded-lg hover:bg-slate-200'  src={img2}alt="" /></Link>
        <Link to='/gamingphones'><img className='lg:w-28 lg:h-28 w-28 h-28 md:w-36 md:h-36 p-10 border shadow-lg rounded-lg hover:bg-slate-200' src={img3} alt="" /></Link>
    </div>
    </div>
    );
};

export default AllCategories;