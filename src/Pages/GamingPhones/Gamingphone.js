import React from 'react';
import { Link } from 'react-router-dom';

const Gamingphone = ({gamingphone}) => {
    const {_id,img, description, title, originalPrice, dealPrice} = gamingphone;
    // console.log(gamingphone)
    return (
        <div>
            <div className="card w-80 h-[550px] bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body h-[400px]">
        <h2 className="card-title flex justify-center">
          {title}
          <div className="badge badge-secondary">Best</div>
        </h2>
        <p className="text-center">{description.slice(0, 150)}...</p>
        <div className="text-center">
          <p className=" font-semibold px-2 py-1">Original Price: ${originalPrice}</p>
          <p className=" font-semibold  px-2 py-1">Best Price: ${dealPrice}</p>
        </div>
        <div className="card-actions justify-center">
         <Link to={`/productdetails/${_id}`} className="btn btn-primary text-white font-semibold w-full">Details</Link>
         {/* <Link className="btn btn-secondary">Buy</Link> */}
        </div>
      </div>
    </div>
        </div>
    );
};

export default Gamingphone;