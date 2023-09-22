import React from "react";

function Home5thcomponent() {
  return (
    <div>
      <div className="h-[650px] flex  items-center justify-between  mb-[230px]">
        <div className="ml-[120px]">
          <img
            src="/Image/design.png"
            alt="about"
            className="mb-[-70px] ml-[-60px]"
          />
          <p className="text-white mb-5 ml-[40px] text-[28px]">About</p>{" "}
          <p className=" w-[300px]  font-bold">
            At Newa Express, we are your gateway to the rich and delectable
            world of Newari cuisine. Our mission is simple: to bring the
            authentic flavors of Newari food from the heart of the Valley
            straight to your doorstep.
          </p>
          <p className=" w-[300px] mt-3  font-bold">
            We have carefully curated a selection of renowned Newari
            restaurants, each known for their dedication to preserving the
            centuries-old traditions and recipes that make Newari cuisine so
            unique. Our team is passionate about ensuring that you experience
            the true essence of Newari culture and culinary heritage with every
            bite.
          </p>
          <img
            src="/Image/design.png"
            alt=""
            className="ml-[800px] mt-[-200px]"
          />
          <p className="ml-[820px] mt-[-65px] font-bold text-[white] text-[15px]  w-[240px]">
            Register your restaurant with us
          </p>
          <p className="ml-[820px] mt-[50px] font-semibold text-[black]">
            Register with newa express and reach new customers
          </p>
          <button className="ml-[860px] mt-[20px] w-[200px] bg-[#ff1414] text-[white] hover:cursor-pointer z-50 rounded-[20px] h-[60px]">
            Send a Request
          </button>
        </div>
        <img src="/Image/ourbg.png" alt="photo" className="ml-[-900px]" />
      </div>
    </div>
  );
}

export default Home5thcomponent;
