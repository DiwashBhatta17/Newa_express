import React, { useState } from "react";
import logo from "../../Images/Logo.png";
import CustomerProfile from "./CustomerProfile";
import CustomerOrderPage from "./CustomerOrderPage";
import CustomerWishListPage from "./CustomerWishListPage";
import { useNavigate } from "react-router-dom";

function CusProfileNavbar(props) {
  const { profile, setProfile } = props;
  const [show, setShow] = useState(3);
  const navigate = useNavigate();

  const [click, setClick]=useState(true);

  function handleLogout() {
    localStorage.removeItem("JWTtoken");
    localStorage.removeItem("customerId");

    navigate("/");
    setProfile(false);
  }

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
      componentToRender = ""
  }
  return profile ? (
    <>
    <div className=" z-50 dhamilo fixed w-full top-0 left-0 border-black flex justify-start items-baseline  h-screen ">
     <div className="flex justify-end border-2 w-full border-red-900">
     <div className=" border-black backgroundImg2 bg-white w-[35vh] h-[100vh] ">
        {/* top Navbar */}

        <div className="flex justify-center">
          <img className=" w-[150px] h-[150px]" src={logo} alt="" />
          <button onClick={() => setProfile(false)}>
            <i className="absolute top-2 right-3 fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="text-2xl  font-semibold font-bold text-[#e94949] mb-2 text-center">
          <h1>Diwash Bhatta</h1>
        </div>

        <div className="flex flex-col ml-3 backgroundImg2 pt-4 h-full text-black text-xl   ">
          <div>
            <div className="flex hover:text-white p-2 hover:bg-[#d139399d] mt-3 gap-2">
              <i className="fa-solid mt-1 fa-user"></i>
              <button onClick={() => setShow(0)}>
                Profile
              </button>
            </div>

            <div className="flex hover:text-white p-2 hover:bg-[#d139399d] gap-2">
              <i className="fa-solid mt-1 fa-shield-heart"></i>
              <button onClick={() => setShow(1)}>Wishlist</button>
            </div>

            <div className="flex hover:text-white p-2 hover:bg-[#d139399d] gap-2">
              <i className="fa-solid mt-1 fa-cart-arrow-down"></i>
              <button onClick={() => setShow(2)}>Order History</button>
            </div>

            <div className="flex hover:text-white p-2 hover:bg-[#d139399d] gap-2">
              <i className="fa-solid mt-1 fa-right-from-bracket"></i>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
      
        {/* item goes in this div  */}

        <div className="bg-white "> {componentToRender}</div>

        {/* Inside This */}
    
     </div>
    </div>
  </>
  ) : (
    ""
  );
}

export default CusProfileNavbar;
