import React from "react";

const BestDeal = ({deal}) => {
    const {img, description, title, originalPrice, dealPrice} = deal;
  return (
    <div className="card w-80 h-[450px] bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-justify">{description.slice(0, 100)}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
