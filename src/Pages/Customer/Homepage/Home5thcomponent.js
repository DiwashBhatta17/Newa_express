import React from "react";
import ABOUT from "../../Images/ABOUT.png";

function Home5thcomponent() {
  return (
    <div>
      <div className="h-[650px] flex  items-center justify-between  mb-[230px]">
        <div className="ml-[120px]">
          <p className="text-black mb-5 ">
            <img src={ABOUT} alt="" />
          </p>{" "}
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
        </div>
        <div className="absolute w-full flex items-center justify-center  ">
         <div>
         <div className="mt-2">
            <h1 className="text-2xl text-[#EC2633]">List Your Restaurant</h1>
            <p className="text-black">At NewaExpress!</p>
          </div>
          <button className="bg-[#EC2633] mt-2 text-white px-4 py-1 rounded-xl">
            Send a request
          </button>
         </div>

        </div>
        <img src="/Image/ourbg.png" alt="photo" className="w-[120%]" />
      </div>
    </div>
  );
}

export default Home5thcomponent;
