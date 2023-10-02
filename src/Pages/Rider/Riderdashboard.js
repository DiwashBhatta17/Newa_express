import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Riderprofile from "./Riderprofile";
import axios from "axios";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Riderdashboard() {
  const [updateprofile, setUpdateprofile] = useState();
  const [rideriD, setRiderID] = useState();
  const [ridername, setRidername] = useState("");
  const [riderdata, setRiderdata] = useState("");

  function handleopenClick() {
    setUpdateprofile(true);
  }
  function handlecloseClick() {
    setUpdateprofile(false);
  }

  useEffect(() => {
    axios
      .get("http://localhost:8081/riders/get-rider/1")
      .then((resp) => {
        console.log("resp", resp.data);
        setRiderdata(resp.data);
      })
      .catch((error) => {
        // Handle the error here
        console.error("An error occurred:", error);
      });
  }, []);

  function picked() {
    toast.info("Order picked.", {
      autoClose: 2000,
      transition: Flip,
    });
  }

  function delivered() {
    toast.success("Order Delivered,", {
      autoClose: 2000,
      transition: Flip,
    });
  }
  return (
    <>
      <div className="header flex w-screen fixed justify-between shadow-xl h-[90px] itmes-center bg-[#ffffff] py-4 px-5">
        <div className="flex gap-2 ">
          <Link to="/">
            <img
              src="/Image/newaExpress.png"
              alt="logo"
              className=" h-[80px] mt-[-20px] hover:cursor-pointer"
            />
          </Link>
          <img
            src="/Image/profile.png"
            alt="profile"
            className="fa-solid text-2xl mt-[2px] ml-[400px] text-black fa-user-lock hover:cursor-pointer
            "
            // onClick={handleopenClick}
          />
          {updateprofile && <Riderprofile onClose={handlecloseClick} />}
          <h1 className="text-2xl font-bold text-black">{ridername}</h1>
        </div>
        <Link
          to="/"
          className=" px-4 py-2 rounded-full border-2 border-[#ff4d4d] hover:bg-[#ff0000] hover:text-white"
        >
          Logout
        </Link>
      </div>

      <div className="flex justify-center pt-[140px] ">
        <div className="">
          <h1 className="text-2xl font-bold text-[#2F80ED]">
            View Your Deliveries
          </h1>
          <p>The following are the total deliveries assigned to you. </p>

          <div className="w-[1000px] bg-[#ffffff] shadow-xl mt-[40px] ">
            <table className="table table-hover  table-striped">
              <thead>
                <th>Customer Name</th>
                <th>Restaurant Name</th>
                <th>Restaurant Address</th>
                <th>Customer Address</th>
                <th>Customer Contact</th>
              </thead>

              <tbody>
                <tr>
                  <td>{riderdata?.orders[0]?.customer?.customerName}</td>
                </tr>

                <tr>
                  <button
                    className="border-black hover:bg-[#00000023]"
                    onClick={picked}
                  >
                    picked
                  </button>

                  <button
                    className="border-black hover:bg-[#00000023]"
                    onClick={delivered}
                  >
                    Delivered
                  </button>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
