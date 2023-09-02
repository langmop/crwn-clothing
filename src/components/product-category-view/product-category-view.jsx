import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/productContext";
import ShopCard from "../../routes/shop/shop-card.component";

const ProductCategoryView = () => {
  const { product } = useParams();
  const { productData } = useContext(ProductContext);

  const productList = productData[product] || [];

  return (
    <>
      <div className="mb-4 text-[40px] pl-[280px]">{product}</div>
      <div className="flex flex-wrap px-[280px]">
        {productList.map((product) => {
          const { name, imageUrl, price, id } = product;
          return (
            <ShopCard name={name} imageUrl={imageUrl} price={price} id={id} />
          );
        })}
      </div>
    </>
  );
};

export default ProductCategoryView;
