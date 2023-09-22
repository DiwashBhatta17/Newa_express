import React, { useState } from "react";
import logo from "../../Images/Logo.png";
import CustomerProfile from "./CustomerProfile";
import CustomerOrderPage from "./CustomerOrderPage";
import CustomerWishListPage from "./CustomerWishListPage";

function CusProfileNavbar(props) {
  const {profile, setProfile} = props;
  const [show, setShow] = useState(0);

  let componentToRender;

  switch (show) {
    case 0:
      componentToRender = <CustomerProfile/>;
      break;
    case 1:
      componentToRender = <CustomerWishListPage/>;
      break;
    case 2:
      componentToRender = <CustomerOrderPage/>;
      break;
    default:
      componentToRender = <CustomerProfile/>
  }
  return (profile)?
    <>
      <div className=" z-50 dhamilo fixed w-full top-0 left-0 border-black flex justify-end items-baseline  h-screen ">
        <div className=" mr- mt- border-black bg-white w-[100vh] h-[100vh] ">
          {/* top Navbar */}

          <div className="h-[10vh] bg-white shadow-xl flex justify-between px-[50px]">
            <img className="w-[14%]" src={logo} alt="" />
            <button onClick={()=>setProfile(false)}><i className=" text-3xl fa-solid fa-xmark"></i></button>
          </div>

          <div className="flex   ">
            <div className=" px-2 mt-2  flex flex-col gap-3 w-[200px] h-[650px] bg-white shadow-xl  border">
              <div className="flex mt-3 gap-2">
                <i className="fa-solid mt-1 fa-user"></i>
                <button onClick={()=>setShow(0)}>Profile</button>
              </div>

              <div className="flex gap-2">
                <i className="fa-solid mt-1 fa-shield-heart"></i>
                <button onClick={()=>setShow(1)} >Wishlist</button>
              </div>

              <div className="flex gap-2">
                <i className="fa-solid mt-1 fa-cart-arrow-down"></i>
                <button onClick={()=>setShow(2)}>Order History</button>
              </div>

              <div className="flex gap-2">
                <i className="fa-solid mt-1 fa-right-from-bracket"></i>
                <a href="#">Logout</a>
              </div>
            </div>

            <div className="flex w-full">

            
              {/* item goes in this div  */}

             {componentToRender}

              {/* Inside This */}
            </div>
          </div>3
        </div>
      </div>
    </>
  :"";
}

export default CusProfileNavbar;
