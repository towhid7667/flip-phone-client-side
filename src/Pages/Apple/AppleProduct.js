import React from 'react';

const AppleProduct = ({appleProduct}) => {
    const {img, description, title, originalPrice, dealPrice} = appleProduct;
    return (
        <div>
            <div className="card w-80 h-[450px] bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body h-[350px]">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">Best</div>
        </h2>
        <p className="text-justify">{description.slice(0, 100)}</p>
        <div className="text-center text-white">
          <p className=" font-semibold bg-red-400 px-2 py-1">Original Price: ${originalPrice}</p>
          <p className=" font-semibold bg-green-400 px-2 py-1">Best Price: ${dealPrice}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Details</div>
          <div className="badge badge-outline">Buy</div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AppleProduct;