import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import useBuyer from './../../Hooks/useBuyer';
import { AuthContext } from './../../Context/UserContext';

const ProductsDetails = () => {
    const product = useLoaderData();
    const {user} = useContext(AuthContext)
    const [isBuyer] = useBuyer(user?.email)
    console.log(product)
    const {img, title, description, originalPrice, dealPrice, sellerName, Location, used, category} = product[0];
    return (
        <div className="hero bg-base-200 py-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img} alt='' className="w-96 h-96 rounded-lg shadow-2xl" />
    <div className='lg:w-1/2 w-11/12  flex flex-col justify-center lg:items-center md:items-center items-start font-semibold'>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6">{description}</p>
      <p className="">Original Price: {originalPrice}</p>
      <p className="">Best Price: {dealPrice}</p>
      <p className="">Seller: {sellerName}</p>
      <p className="">Selling Location : {Location}</p>
      <p className="">Used For : {used}</p>
      <p className="">Category: {category}</p>
      
    {
        isBuyer && <button className="btn btn-primary my-3">Buy</button>
    }
      
    </div>
  </div>
</div>
    );
};

export default ProductsDetails;