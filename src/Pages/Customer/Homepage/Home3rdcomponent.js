import React, { useEffect, useState } from "react";
import Home4thcomponent from "./Home4thcomponent";
import { Link } from "react-router-dom";
import restu from "../../Images/RestroPageImage/bgRestu.png";
import getTopRestaurant from "../../../Services/CustomerService/topRestaurantService";
import axios from "axios";

function Home3rdcomponent() {
  const [data, setData] = useState(["", "", ""]);

  useEffect(() => {
    // Inside the useEffect, you make the Axios GET request
    getTopRestaurant()
      .then((res) => {
        setData(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="backgroundImg1 p-5">
      <div className="flex justify-center">
        <img
          src="/Image/vector2.png"
          alt="aboutus"
          className="my-5 ml-[100px]"
        />
      </div>

      <div className="flex  flex-wrap gap-5 mb-5 items-center mx-[120px] justify-around">
        {data.map((value, index) => (
          <Link to={`restaurant/${value.restaurantId}`}>
            <div
              key={index}
              className="border-2  h-[300px] backgroundImg1 border-black w-[280px] overflow-hidden"
            >
              <div className="h-[190px] overflow-hidden ">
                <img
                  className="h-[240px] -z-30 w-[650px] transition-transform transform  scale-110 hover:scale-125"
                  src={value.bannerImg}
                  alt=""
                />
              </div>
              <div className=" flex item-center justify-center absolute ml-[90px] -mt-[80px]">
                <img
                  className=" h-[100px] w-[100px] rounded-full"
                  src={value.profileImg}
                  alt=""
                />
              </div>

              <div className="bg-[#0e0e0e97] flex flex-col justify-center items-center text-white  h-[130px]">
                <div className="text-[#d4f532] flex gap-1">
                  {/* <i className="fa-solid fa-star"></i> */}
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>

                <h1 className="text-[#f24d4d] text-xl font-bold">
                  {value.restaurantName}
                </h1>
                <p className="text-[#e2dddd]">{value.restaurantAddress}</p>
                <div className="mx-4">{/* <img src={line} alt="" /> */}</div>
              </div>
            </div>
          </Link>
        ))}

        {/* this is a comp */}
      </div>
    </div>
  );
}

export default Home3rdcomponent;
