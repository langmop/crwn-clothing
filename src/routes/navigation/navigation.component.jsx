import React from "react";
import { Link, Outlet } from "react-router-dom";
import crownLogo from "../../assets/crownLogo.svg";

const Navigation = () => {
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
            <Link to="/sign-in">
              <button
                name="SignUp"
                className="w-[120px] text-[#029664] h-[48px] border-2 border-solid border-[#029664] font-semibold rounded-[8px] hover:bg-[#029664] hover:text-white"
              >
                Sign Up
              </button>
            </Link>
          </div>
          <div className="text-[20px] mr-4">
            <Link to="/">
              <button
                name="SignUp"
                className="w-[120px] text-[#029664] h-[48px] border-2 border-solid border-[#029664] font-semibold rounded-[8px] hover:bg-[#029664] hover:text-white"
              >
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
