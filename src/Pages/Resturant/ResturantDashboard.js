import React, { useEffect, useState } from "react";
import ResturantNavbar from "./ResturantNavbar";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboardservice from "../../Services/restaurantService/Dashboardservice";
import axios from "axios";
import baseURL from "../../Services/Api/api";

function ResturantDashboard() {
  const [profileImage, setProfileImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);

  const handleProfileImageChange = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      setProfileImage(imageFile);
    }
  };

  const handleBannerImageChange = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      setBannerImage(imageFile);
    }
  };

  const handleUploadProfileImage = () => {
    // Implement the logic to upload the profile image here
    if (profileImage) {
      // Use profileImage to upload the image to the server
      console.log("Uploading profile image:", profileImage);
    }
  };

  const handleUploadBannerImage = () => {
    // Implement the logic to upload the banner image here
    if (bannerImage) {
      // Use bannerImage to upload the image to the server
      console.log("Uploading banner image:", bannerImage);
    }
  };

  //validating total revenue

  const [restaurantID, setRestaurantID] = useState([]);

  useEffect(() => {
    axios.get(baseURL + "restaurants/get-all-restaurants").then((resp) => {
      setRestaurantID(resp.data[0]);
    });
  }, []);
  {
    console.log("the restaurant id is:", restaurantID);
  }

  return (
    <>
      {/* <AdminNavbar /> */}
      <ResturantNavbar />
      <div className="bg-[#ede9e9]  flex flex-col gap-2 justify-center items-center w-full h-screen">
        <div className="flex gap-[50px] mt-4">
          <div className="bg-white  w-[60vh] h-[100px] flex justify-around items-center ">
            <div className="">
              <h1 className="text-3xl">250</h1>
              <p>Today Order</p>
            </div>
            <i className="text-3xl fa-solid fa-users-gear"></i>
          </div>

          <div className="bg-white  w-[60vh] h-[100px] text-[#FABC25] flex justify-around items-center ">
            <div className="">
              <h1 className="text-3xl">Rs: 5000</h1>
              <p className="text-[#565252]">Today Reveneu</p>
            </div>
            <i className="fa-solid text-4xl fa-hand-holding-dollar border-2 p-2 border-[#FABC25] rounded-full "></i>{" "}
          </div>
        </div>

        <div className="flex gap-[50px] mt-[9px]">
          <div className="bg-white  w-[60vh] h-[370px] flex justify-start  pl-5 ">
            <div className="mt-3">
              <h1 className="text-2xl mb-3">Update Restaurant Details</h1>
              <p>Name</p>
              <input className="border w-[250px]" type="text" />
              <p>Address</p>
              <input className="border w-[250px]" type="text" />
              <p>Description</p>
              <textarea
                className="border mb-2 h-[60px] w-[250px]"
                type="text"
              />
              <p>Contact</p>
              <input className="border mb-2 w-[250px]" type="text" />

              <div>
                <button className="px-4 py-1 bg-[#64cf3a] text-white rounded-3xl hover:bg-[green]">
                  Update
                </button>
              </div>
            </div>
            {/* <i className="text-3xl fa-solid fa-users-gear"></i> */}
          </div>
          <div className="bg-white w-[60vh] h-[340px] flex justify-start pl-5">
            <div className="mt-5">
              <h1 className="text-2xl mb-4">
                Update Profile and Banner Images
              </h1>
              <div className="flex">
                <div className="w-[35%] mb-4">
                  <p className="mb-4">Update Profile Image:</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfileImageChange}
                  />
                  <button
                    className="bg-[#9ebd92] text-white px-5 py-1 rounded-xl mt-3 hover:bg-[green]"
                    onClick={handleUploadProfileImage}
                  >
                    Upload
                  </button>
                </div>
                <div className="w-[35%]">
                  <p className="mb-4"> Update Banner Image:</p>
                  <input
                    className="w-["
                    type="file"
                    accept="image/*"
                    onChange={handleBannerImageChange}
                  />
                  <button
                    className="bg-[#9ebd92] text-white px-5 py-1 rounded-xl mt-3  hover:bg-[green]"
                    onClick={handleUploadBannerImage}
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex justify-around items-center w-[941px] mt-2 h-[10vh]">
          <div className="flex items-center gap-2">
            <i className="fa-solid text-[#1D8FF7] text-3xl fa-boxes-stacked"></i>{" "}
            <div>
              <h1 className="text-3xl text-[#1D8FF7]">150</h1>
              <p>Total Orders</p>
            </div>
          </div>

          <div className="flex  items-center gap-2">
            <i className="fa-solid text-[#71D875] text-3xl fa-truck-fast"></i>{" "}
            <div>
              <h1 className="text-[#71D875] text-3xl">100</h1>
              <p>Total Delivery</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <i className="fa-solid text-3xl text-[#F48665] fa-clipboard-list"></i>{" "}
            <div>
              <h1 className="text-3xl text-[#F48665]">50</h1>
              <p>Pending Orders</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <i className="fa-solid text-[#FF9800] text-3xl fa-hand"></i>{" "}
            <div>
              <h1 className="text-3xl text-[#FF9800]">10</h1>
              <p>Orders Hold</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResturantDashboard;
