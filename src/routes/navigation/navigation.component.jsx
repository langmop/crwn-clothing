import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { noop } from "lodash";
import { onLogoutClick } from "../../utils/firebase.util";
import { CartContext } from "../../contexts/cartContext";
import classNames from "classnames";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartData, setCartData } = useContext(CartContext);
  const { cards = {} } = cartData;
  const cartClass = classNames(
    { hidden: !cartData.isCartOpen },
    { block: cartData.isCartOpen }
  );

  return (
    <div className="flex flex-col h-[100vh]">
      <div className="flex justify-between items-center w-[90%] m-auto shadow-xl rounded-[8px] p-4 mt-4 mb-[32px]">
        <div>
          <img
            className="h-[40px]"
            src="https://i.ibb.co/kXm4bp5/Frame-13.png"
            alt="site logo"
            srcset=""
          />
        </div>
        <div className="flex">
          <div className="text-[20px] mr-4">
            {currentUser ? (
              <div onClick={onLogoutClick}>
                <button
                  name="Logout"
                  className="w-[120px] text-[#029664] h-[48px] font-semibold rounded-[8px] hover:bg-[#029664] hover:text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/sign-in">
                <button
                  name="SignUp"
                  className="w-[120px] text-[#029664] h-[48px] font-semibold rounded-[8px] hover:bg-[#029664] hover:text-white"
                >
                  Sign Up
                </button>
              </Link>
            )}
          </div>
          <div className="text-[20px] mr-4">
            <Link to="/">
              <button
                name="SignUp"
                className="w-[120px] text-[#029664] h-[48px] font-semibold rounded-[8px] hover:bg-[#029664] hover:text-white"
              >
                Home
              </button>
            </Link>
          </div>
          <div className="text-[20px] mr-4">
            <Link to="/shop">
              <button
                name="SignUp"
                className="w-[120px] text-[#029664] h-[48px] font-semibold rounded-[8px] hover:bg-[#029664] hover:text-white"
              >
                Shop
              </button>
            </Link>
          </div>
          <div
            className="text-[20px] mr-4 relative cursor-pointer"
            onClick={() =>
              setCartData({ ...cartData, isCartOpen: !cartData.isCartOpen })
            }
          >
            <div className="bg-[#029664] h-[24px] w-[24px] pt-[2px] text-center absolute top-[-4px] left-[20px] text-[12px] rounded-full text-white">
              {Object.keys(cards)?.length}
            </div>
            <img
              onClick={noop}
              src="https://i.ibb.co/r47YWr8/shop.png"
              className="h-[50px] w-[50px]"
              alt=""
              srcset=""
            />
          </div>
          <div className="relative">
            <div
              className={`${cartClass} flex flex-col min-w-[280px] h-[300px] bg-white absolute top-[60px] right-[0px] shadow-lg rounded-md p-[10px] justify-between`}
            >
              {Object.keys(cards).length ? (
                <>
                  {" "}
                  <div className="overflow-auto">
                    {Object.keys(cards).map((cart) => {
                      const data = cards[cart];
                      return (
                        <div className="mb-4 flex">
                          <div className="w-[60px] h-[60px]">
                            <img src={data?.imageUrl} alt="" srcset="" />
                          </div>
                          <div className="ml-2 p-2">
                            <div>{data?.name}</div>
                            <div>Quantity: {data?.quantity}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <button className="w-[100%] p-2 bg-[#029664] rounded-md mt-2 text-white">
                      Checkout
                    </button>
                  </div>
                </>
              ) : (
                <div>
                  <img
                    src="https://cdn.dribbble.com/users/844846/screenshots/2981974/media/ae264d741cae09c2377235d9705f9cbc.png?resize=800x600&vertical=center"
                    alt=""
                    srcset=""
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
