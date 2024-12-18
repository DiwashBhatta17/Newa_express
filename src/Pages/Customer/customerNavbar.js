import React, { useEffect, useState } from "react";
import logo from "../Images/Logo.png";
import Login from "../Login/Login";
import Signup from "../Login/Siguup";
import Otp from "../Login/Otp";
import { Link, useNavigate } from "react-router-dom";
import dummy from "../Images/dummy-profile-pic.jpg";
import CusProfileNavbar from "./ProfileCustomer/CusProfileNavbar";
import Cart from "./ProfileCustomer/Cart";
import CusBigNavbar from "./ProfileCustomer/CustomerBigNavbar";
import { getPic } from "../../Services/CustomerService/profilePicService";


function CustomerNavbar() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [otp, setOtp] = useState(false);
  const [profile, setProfile] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const userLogin = useNavigate((state)=> state.counter.userAuthentication);

  const [pip, setPip] = useState(null);

  

  const userId = localStorage.getItem("customerId");

  useEffect(() => {
    async function fetchData() {
      try {  
        const res2 = await getPic(userId);
        setPip(res2);
        console.log("res2", res2);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Login login={login} setLogin={setLogin} />
      <Signup signup={signup} setOtp={setOtp} setSignup={setSignup} />
      <Otp setOtp={setOtp} setLogin={setLogin} otp={otp} />
      {/* <CusBigNavbar  profile={profile} setProfile={setProfile}/> */}
      <CusProfileNavbar profile={profile} setProfile={setProfile}/>
      <div className="w-full m  absolute">
        <div className="flex justify-between items-center mx-[130px] mt-[15px]">
          <div>
            <Link to="/">
              <img className="h-[127px] mt-[8px]" src={logo} alt="" />
            </Link>
          </div>
          <div className="flex gap-5 items-center text-white">
            <Link
              to="/"
              className="  hover:text-red-700 hover:underline duration-100 underline-offset-4"
            >
              Home
            </Link>

            <Link
              to="/browseResturant"
              className=" hover:text-red-700 hover:underline underline-offset-4"
              href="#"
            >
              Browse Resturants
            </Link>

            {
              userLogin && localStorage.getItem("customerId") ? <><button
              onClick={() => setIsCartOpen(!isCartOpen)}
              
              className=" hover:text-red-700 hover:underline underline-offset-4"
              href="#"
            >
              <i className="text-2xl fa-solid fa-cart-arrow-down"></i>
            </button>
            <Cart isCartOpen={isCartOpen}/>
            <button
            onClick={()=> setProfile(true)}
             
              className=" hover:text-red-700 hover:underline w-[40px] rounded-full overflow-hidden  h-[40px] underline-offset-4"
              
            >
              <img className=" scale-125" src={pip||dummy} alt="" />
            </button></> : <><button
              onClick={() => setLogin(true)}
              className=" hover:text-red-700 hover:underline underline-offset-4"
              href="#"
            >
              Login
            </button>
            <button
              onClick={() => setSignup(true)}
              className=" hover:text-red-700 hover:underline underline-offset-4"
              href="#"
            >
              Signup
            </button>
            </>
            }
            
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerNavbar;
