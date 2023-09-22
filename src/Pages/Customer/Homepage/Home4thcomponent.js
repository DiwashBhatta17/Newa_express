import React from "react";
import Home5thcomponent from "./Home5thcomponent";

function Home4thcomponent() {
  return (
    <div className="h-[250px]">
      <div className=" reviewSection h-[250px]  flex border-2 border-red-600">
        <p className="text-[#ff1414] ml-[560px] font-bold text-[20px] mt-[10px]">
          Customer Reviews
        </p>
        <img
          src="/Image/next.png"
          alt="next"
          className="h-[40px] mt-[120px] ml-[-590px] hover:h-[42px] "
        />
        <div className=" reviews bg-[#EC2633] w-[360px] h-[100px] rounded-[30px] mt-[80px] ml-[100px] text-[white] font-semibold justify-center">
          <h1 className=" text-[13px] ml-[130px] mt-8">Costumer Name</h1>
          <p className="mt-[10px] text-[11px] ml-2">
            I recently order from Newa Express and the experience was fantastic
          </p>
        </div>
        <div className="reviews bg-[#EC2633] w-[360px] h-[100px] rounded-[30px] mt-[80px] ml-[100px]"></div>
        <img
          src="/Image/nextr.png"
          alt="next"
          className="h-[40px] mt-[120px] ml-[100px] hover:h-[44px]"
        />
      </div>
    </div>
  );
}

export default Home4thcomponent;
