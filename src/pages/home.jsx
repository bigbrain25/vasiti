import React from "react";
import logo from "../assets/images/logo.svg";
import couple from "../assets/images/couple.svg";
import vector from "../assets/images/vector.svg";
import group from "../assets/images/group.svg";


const Home = () => {
  return (
    <div>
      <div className="ml-8 mt-10">
        <img src={logo} alt="logo" />
      </div>
      <div className="text-3xl font-bold mt-20 ml-8 mr-14">
        <h1>Amazing Experiences from Our Wonderful Customers</h1>
      </div>
      <div className="mt-5 ml-8 mr-14">
        <p>
          Here is what customers and vendors are saying about us, you can share
          your stories with us too.
        </p>
      </div>
      <div className="mt-5">
        <img src={couple} alt="" />
      </div>
      <div className="bg-black text-white">
        <div className="font-semibold ml-16 pt-28">
          <h2>Oby’s Experience </h2>
        </div>
        <div className="ml-16 mt-3 w-24 ">
          <p className="border p-2 rounded">customer</p>
        </div>
        <div className="ml-16 mt-3 mr-14">
          <p>
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </p>
              </div>
              <div className="mt-12 font-medium ml-16 mr-14">
                  <p>
                  Share your own story!
                  </p>
                  <img src={vector} alt=""/>
              </div>
              <div>
                  <img src={group} alt=""/>
              </div>
      </div>
    </div>
  );
};

export default Home;
