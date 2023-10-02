import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import restaurantInfoService from "../../Services/restaurantService/restaurantInfoService";

function ResturantNavbar() {
  const [data, setData] = useState("");

  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("JWTtoken");
    localStorage.removeItem("restaurantId");

    navigate("/");
  }

  useEffect(() => {
    restaurantInfoService()
      .then((res) => {
        setData(res);
        console.log("Res", res);
      })
      .catch((e) => console.log("Error", e));
  }, []);
  return (
    <>
      <div className="bg-[#d4d0d0] absolute shadow-xl h-screen">
        <div className="flex w-screen justify-between absolute shadow-xl itmes-center bg-white py-4 px-5">
          <div className="flex gap-2 ">
            <i className="fa-solid text-2xl mt-[2px] text-black fa-user-lock"></i>
            <h1 className="text-2xl font-bold text-black">
              {data.restaurantName}
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className=" px-5 py-2 rounded-full border-2 border-[#a42222]"
          >
            Logout
          </button>
        </div>
        <div className="w-[30vh] top-[11vh] fixed flex flex-col items-start p-5 gap-4 h-[70vh] mt-4 bg-white shadow-xl">
          <div className="flex gap-3">
            <i className="fa-light text-xl fa-table-columns"></i>
            <Link to="/resturantDashboard" className="mt-[3px] ">
              Dashboard
            </Link>
          </div>

          <div className="flex gap-2">
            <i className="fa-solid mt-1 fa-users"></i>
            <Link to="/resturantOrderList" href="#">
              Orders
            </Link>
          </div>

          <div className="flex gap-[10px]">
            <i className="fa-regular mt-1 fa-hourglass"></i>
            <Link to="/resturantMenu" className="ml-2">
              Menus
            </Link>
          </div>
          {/* 
          <div className="flex gap-3">
            <i className="fa-regular mt-1 fa-chart-bar"></i>
            <a className="" href="#">
              Analytics
            </a>
          </div> */}
        </div>
        <div className="bg-white fixed top-[84vh] left-0 mt-3 w-[30vh] h-[10vh] flex flex-col shadow-xl items-center gap-1">
          <h1 className="mt-2">Newa Express</h1>
          <p>version: 1.0.0.11</p>
        </div>
      </div>
    </>
  );
}

export default ResturantNavbar;
