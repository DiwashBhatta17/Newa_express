import React from "react";
import AdminNavbar from "./AdminNavbar";

function AdminDashboard() {
  return (
    <>
      {/* <AdminNavbar /> */}
      <AdminNavbar/>
      <div className="bg-[#e6d5d5]  flex flex-col gap-2 justify-center items-center w-full h-screen">
       
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
              <div><button className="px-4 py-1 bg-[#64cf3a] text-white rounded-3xl">Update</button></div>

            </div>
            {/* <i className="text-3xl fa-solid fa-users-gear"></i> */}
          </div>
          <div className="bg-white w-[60vh] h-[340px] flex justify-start  pl-5 ">
            <div className="mt-5">
              <h1 className="text-3xl mb-4">Update Profile</h1>
              <p>Name</p>
              <input className="border w-[250px]" type="text" />
              <p>Age</p>
              <input className="border w-[250px]" type="text" />
              <p>Description</p>
              <input className="border h-[80px] w-[250px]" type="text" />

            </div>
            {/* <i className="text-3xl fa-solid fa-users-gear"></i> */}
          </div>
        </div>
        <div className="bg-white w-[941px] mt-2 h-[10vh]">
          k
          
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
