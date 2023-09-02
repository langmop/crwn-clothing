import React, { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cartContext";

const ShopCard = ({ name, imageUrl, price, id }) => {
  const { setCartData, cartData = {} } = useContext(CartContext);

  const onClickAddToCart = () => {
    const cards = cartData?.cards || {};
    const currentQuantity = cards?.[id]?.quantity || 0;

    const cart = {
      ...cartData,
      cards: {
        ...cards,
        [id]: {
          quantity: currentQuantity + 1,
          name,
          imageUrl,
          price,
        },
      },
    };

    setCartData(cart);
  };

  return (
    <div className="flex flex-col w-[424px] rounded-t-md mb-[24px] mr-[24px]">
      <div className="h-[380px]">
        <img
          className="h-[100%] w-[100%] rounded-t-md"
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="p-[24px] bg-[#EDEFF6] h-[220px] justify-between flex flex-col rounded-b-md">
        <div>
          <div className="text-[20px]">{name}</div>
          <div className="text-[#4A60A1]">$ {price}</div>
        </div>
        <div className="mt-4">
          <button
            onClick={onClickAddToCart}
            className="bg-[#029664] text-white font-semibold w-[100%] h-[60px] rounded-md shadow-lg"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
