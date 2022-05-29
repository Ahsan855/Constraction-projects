import React from "react";

const Product = ({ allProduct }) => {
  const { image, name, shortDescription } = allProduct;
  return (
    <div className="card bg-base-100 shadow-xl mt-10">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body text-left">
        <h2 className="text-2xl text-primary">{name}</h2>
        <p className="text-sm">{shortDescription}</p>
      </div>
    </div>
  );
};

export default Product;
