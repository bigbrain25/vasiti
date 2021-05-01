import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const   Nav = () => {
  return (
    <div>
      <div className="flex">
        <div className="ml-8 mt-10">
          <img src={logo} alt="logo" />
        </div>
        <div className="md:flex hidden text-sm mt-10 ml-auto mr-44">
          <div className="self-center flex">
          <Link to="/">
              <a className="mx-9">ABOUT US</a>
              </Link>

            <Link to="/stories">
              <a className="mr-9">STORIES</a>
            </Link>
            <Link to="/">
              <a className="mr-9">CONTACT US</a>
            </Link>
            <Link to="/">
              <a className="mr-2">LOGIN</a>
              </Link>
          </div>
          <button
            class="bg-button-color w-20 h-6 mt-2 rounded-lg text-white"
            type="button"
          >
            SIGN UP
          </button>
        </div>
      </div>
      <div className="hidden md:flex justify-center text-sm border border-opacity-40 p-3 mt-3">
      <div className="mx-9">MARKET PLACE</div>
      <div className="mr-9">WHOLESALE CENTER</div>
      <div className="mr-9">SELLER CENTER</div>
      <div className="mr-9">SERVICES</div>
      <div className="mr-9">INTERNSHIP</div>
        <div>EVENTS</div>
      </div>
    </div>
  );
};

export default Nav;
