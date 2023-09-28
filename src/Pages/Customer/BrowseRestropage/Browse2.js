import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import restu from "../../Images/RestroPageImage/bgRestu.png";
import CustomerNavbar from "../customerNavbar";
import Footer from "../Footer";
import getAllrestaurantService, {
  getBannerImage,
  getProfileImage,
} from "../../../Services/CustomerService/getAllrestaurantService";
import searchRestaurantService from "../../../Services/CustomerService/searchRestaurantService";

function Browse2() {
  const [data, setData] = useState(["", "", "", "", "", ""]);
  const { query } = useParams();

  async function fetchRestaurant() {
    try {
      const response = await getAllrestaurantService();

      if (response) {
        for (let i = 0; i < response.length; i++) {
          let bannerImg = await fetchBannerImage(response[i]?.restaurantId);
          let profileImg = await fetchProfileImage(response[i]?.restaurantId);
          response[i]["bannerImg"] = bannerImg;
          response[i]["profileImg"] = profileImg;
        }

        const results = response?.filter((restaurant) => {
          return restaurant?.restaurantName?.toLowerCase().includes(query);
        });

        results && setData(results);
      }
    } catch (error) {
      console.error("Cannot get the News", error);
    }
  }

  async function fetchBannerImage(restaurantId) {
    try {
      const response = await getBannerImage(restaurantId);
      return URL.createObjectURL(response);
    } catch (error) {
      console.error("Cannot get images", error);
      return [];
    }
  }

  async function fetchProfileImage(restaurantId) {
    try {
      const response = await getProfileImage(restaurantId);
      return URL.createObjectURL(response);
    } catch (error) {
      console.error("Cannot get images", error);
      return [];
    }
  }

  useEffect(() => {
    fetchRestaurant();
    // performSearch();
  }, []);

  return (
    <div className="backgroundImg1 mb-5 pt-[20px]">
      <div className="flex mt-[0px] ml-[820px] justify-end  bg-[#fffffffc] w-[370px] h-[45px] rounded-full">
        <div>
          {" "}
          <input
            type="text"
            className=" relative outline-none bg-transparent  text-black text-center font-semibold w-[310px] h-[47px]  rounded-[10px]"
          />
        </div>
        <img
          src="/Image/search.png"
          alt="icon"
          className="w-[20px] h-[20px] mt-[10px] mr-4 "
        />
      </div>
      <div className="py-5 px-[120px]">
        <img className="w-[40%]" src="/Image/restroList.png" alt="" />
      </div>

      <div className="pb-[280px]">
        <div className="flex backgroundImg2 py-5 flex-wrap gap-3 items-cente justify-center mx-[110px] ">
          {data.map((value, index) => (
            <Link to={`/restaurant/${value.restaurantId}`}>
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
      <Footer />
    </div>
  );
}

export default Browse2;
