import React from 'react';
import Buyers from '../../Components/Buyers/Buyers';
import Sellers from '../../Components/Sellers/Sellers';

const AllUsers = () => {
    return (
        <div>
            <h2 className='text-3xl font-semibold text-center my-3'>Buyers</h2>
            <Buyers></Buyers>
            <h2 className='text-3xl font-semibold text-center mt-20'>Sellers</h2>
            <Sellers></Sellers>
        </div>
    );
};

export default AllUsers;