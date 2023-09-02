import React, { useContext, useEffect, useState } from "react";
import ShopCard from "./shop-card.component";
import { getCategoriesAndDocument } from "../../utils/firebase.util";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/productContext";

const Shop = () => {
  const { productData } = useContext(ProductContext);

  return (
    <div className="flex flex-col px-[280px] justify-between">
      {Object.keys(productData).map((element) => {
        return (
          <div>
            <Link to={`/shop/${element}`}>
              <div className="text-[40px]">{element}</div>
            </Link>
            <div className="flex flex-wrap">
              {productData[element].map((card) => {
                const { name, imageUrl, price, id } = card;
                return (
                  <ShopCard
                    name={name}
                    imageUrl={imageUrl}
                    price={price}
                    id={id}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
