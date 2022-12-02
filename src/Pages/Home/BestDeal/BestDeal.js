import React from "react";
import { Link } from "react-router-dom";

const BestDeal = ({deal}) => {
    const {img, description, title, originalPrice, dealPrice} = deal;
  return (
    <div className="card w-80 h-[550px] bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body h-[300px] bg-gray-50 rounded-b-lg">
        <h2 className="card-title flex justify-center">
          {title}
          <div className="badge badge-secondary">Best</div>
        </h2>
        <p className="text-center">{description.slice(0,100)}</p>
        <div className="text-center">
          <p className=" font-semibold px-2 py-1">Original Price: ${originalPrice}</p>
          <p className=" font-semibold  px-2 py-1">Best Price: ${dealPrice}</p>
        </div>
        <div className="card-actions justify-center">
         <Link className="btn btn-primary text-white font-semibold w-full">Details</Link>
         {/* <Link className="btn btn-secondary">Buy</Link> */}
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
