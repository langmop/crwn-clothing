import React from "react";
import { Link, Outlet } from "react-router-dom";
import crownLogo from "../../assets/crownLogo.svg";

const Navigation = () => {
  return (
    <div>
      <div className="flex justify-between items-center m-4">
        <div>
          <img src={crownLogo} alt="site logo" srcset="" />
        </div>
        <div className="flex">
          <div className="text-[20px] mr-4">
            <Link to="/sign-in">Sign-In</Link>
          </div>
          <div className="text-[20px] mr-4">
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
