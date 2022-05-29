import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("fackdata.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);
  return (
    <div className="my-20">
      <h1 className="text-center">
        {" "}
        <span className="text-3xl font-bold text-primary text-center border-b-4 w-3xl mx-auto border-primary mt-2">
          All Products
        </span>
      </h1>
      <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-1  ">
        {allProducts.map((allProduct) => (
          <Product key={allProduct?._id} allProduct={allProduct}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
