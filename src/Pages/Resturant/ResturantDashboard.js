import React, { useState } from "react";
import ResturantNavbar from "./ResturantNavbar";

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
  return (
    <>
      {/* <AdminNavbar /> */}
      <ResturantNavbar />
      <div className="bg-[#ede9e9]  flex flex-col gap-2 justify-center items-center w-full h-screen">
        <div className="flex gap-[50px] mt-4">
          <div className="bg-white  w-[60vh] h-[100px] flex justify-around items-center ">
            <div className="">
              <h1 className="text-3xl">2,02,150</h1>
              <p>Today Order</p>
            </div>
            <i className="text-3xl fa-solid fa-users-gear"></i>
          </div>

          <div className="bg-white  w-[60vh] h-[100px] flex justify-around items-center ">
            <div className="">
              <h1 className="text-3xl">2,02,150</h1>
              <p>Today Order</p>
            </div>
            <i className="text-3xl fa-solid fa-users-gear"></i>
          </div>
        </div>

        <div className="flex gap-[50px] mt-[9px]">
          <div className="bg-white  w-[60vh] h-[340px] flex justify-start  pl-5 ">
            <div className="mt-3">
              <h1 className="text-3xl mb-3">Update Profile</h1>
              <p>Name</p>
              <input className="border w-[250px]" type="text" />
              <p>Age</p>
              <input className="border w-[250px]" type="text" />
              <p>Description</p>
              <input className="border mb-2 h-[80px] w-[250px]" type="text" />
              <div>
                <button className="px-4 py-1 bg-[#64cf3a] text-white rounded-3xl">
                  Update
                </button>
              </div>
            </div>
            {/* <i className="text-3xl fa-solid fa-users-gear"></i> */}
          </div>
          <div className="bg-white w-[60vh] h-[340px] flex justify-start pl-5">
      <div className="mt-5">
        <h1 className="text-2xl mb-4">Update Profile and Banner Images</h1>
        <div className="flex">
          <div className="w-[35%] mb-4">
            <p className="mb-4">Update Profile Image:</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfileImageChange}
            />
            <button className="bg-[#9ebd92] text-white px-5 py-1 rounded-xl mt-3" onClick={handleUploadProfileImage}>Upload</button>
          </div>
          <div className="w-[35%]">
            <p className="mb-4"> Update Banner Image:</p>
            <input
            className="w-["
              type="file"
              accept="image/*"
              onChange={handleBannerImageChange}
            />
            <button className="bg-[#9ebd92] text-white px-5 py-1 rounded-xl mt-3" onClick={handleUploadBannerImage}>Upload</button>
          </div>
        </div>
      </div>
    </div>
        </div>
        <div className="bg-white w-[941px] mt-2 h-[10vh]"></div>
      </div>
    </>
  );
}

export default ResturantDashboard;
