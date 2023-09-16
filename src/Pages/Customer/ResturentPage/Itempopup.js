import React from "react";

export default function Itempopup({ onClose }) {
  return (
    <div className="bg  fixed inset-0 flex items-center justify-center z-50 backdrop-blur backdrop-filter bg-opacity-40">
      <div className="roughbg w-[530px] h-[450px] flex flex-wrap">
        <img
          src="/Image/samay.png"
          alt="samay"
          className="h-[220px] w-[240px] mt-8 ml-5"
        />
        <h1 className="text-white font-semibold text-[25px] mx-10 my-8">
          Samay Baji
        </h1>
        <h1
          className="text-white font-bold text-[22px] ml-[24px] mt-[8px] hover:cursor-pointer"
          onClick={onClose}
        >
          {" "}
          X
        </h1>
        <p className="text-white ml-[300px] mt-[-180px]">Item Description</p>
        <table className="text-white  transform translate-y-[-110px] ml-[-100px]">
          <tr>
            <th>Price: {}</th>
          </tr>
          <tr>
            <th>Type:{}</th>
          </tr>
          <tr>
            <th>Meat:{}</th>
          </tr>
          <tr>
            <th>Quantity:{}</th>
          </tr>
        </table>
        <img
          src="/Image/Vector.png"
          alt="order"
          className="w-[300px] mx-[100px] h-[70px] mb-[20px] "
        />
        <p className="text-white mt-[-85px] ml-[220px] font-semibold text-[28px] hover:cursor-pointer ">
          {" "}
          Order{" "}
        </p>
      </div>
    </div>
  );
}
