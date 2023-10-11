import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Riderprofile from "./Riderprofile";
import axios from "axios";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getRiderbyId from "../../Services/RiderService/getRiderbyId";

import ReceiverFile from "../../Services/Locations/MapContainer";
import orderDelivered from "../../Services/RiderService/orderDelivered";
import RiderLocationSend, { LocationMarker } from "../../Services/Locations/LiveTracking/sendRiderLiveLocation";

export default function Riderdashboard() {
  const [updateprofile, setUpdateprofile] = useState(false);
  const [ridername, setRidername] = useState("");
  const [riderdata, setRiderdata] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState("");

  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");

  const userID = localStorage.getItem("riderId");

  function handleopenClick() {
    setUpdateprofile(true);
  }

  function handlecloseClick() {
    setUpdateprofile(false);
  }
  async function fetchData() {
    try {
      const response = await getRiderbyId(userID);
      setRiderdata(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  function sendUsername(){
    setUsername(riderdata[0]?.customer.username);
  }

  useEffect(() => {
    fetchData();

    if (riderdata && riderdata.length > 0) {
        sendUsername();
    }
}, []);


  function picked() {
    toast.info("Order picked.", {
      autoClose: 2000,
      transition: Flip,
    });
  }

  async function delivered(orderId) {
    await orderDelivered(orderId);
    fetchData(); 
    // Perform the action to mark the order as delivered, e.g., send a request to your backend
    toast.success("Order Delivered,", {
      autoClose: 2000,
      transition: Flip,
    });
  }

  function viewLocationOnMap(order) {
    // Set the selected order for map display
    setSelectedOrder(order);
    setAddress(order)
  }

  // Function to close the map popup
  function closeMapPopup() {
    // Clear the selected order when closing the map popup
    setSelectedOrder(null);
  }
  return (
    <>
      <div className="header flex w-screen fixed justify-between shadow-xl h-[90px] items-center bg-[#ffffff] py-4 px-5">
        <div className="flex gap-2 ">
          <Link to="/">
            <img
              src="/Image/newaExpress.png"
              alt="logo"
              className="h-[80px] mt-[-20px] hover:cursor-pointer"
            />
          </Link>
          <img
            src="/Image/profile.png"
            alt="profile"
            className="fa-solid text-2xl w-[50px] mt-[2px] ml-[400px] text-black fa-user-lock hover:cursor-pointer"
          />
          {updateprofile && <Riderprofile onClose={handlecloseClick} />}
          <h1 className="text-2xl font-bold text-black">{ridername}</h1>
        </div>
        <Link
          to="/"
          className="px-4 py-2 rounded-full border-2 border-[#ff4d4d] hover:bg-[#ff0000] hover:text-white"
        >
          Logout
        </Link>
      </div>

      <div className="flex justify-center mb-5 pt-[140px] ml-10 ">
        <div className="w-full">
          <h1 className="text-2xl font-bold text-[#2F80ED]">
            View Your Deliveries
          </h1>
          <p className="mb-4">
            The following are the total deliveries assigned to you.{" "}
          </p>

          <div className="w-[1000px] bg-white shadow-xl rounded-lg overflow-hidden mx-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-[#2F80ED] text-white">
                  <th className="px-4 py-2">Customer Name</th>
                  <th className="px-4 py-2">Restaurant Name</th>
                  <th className="px-4 py-2">Restaurant Address</th>
                  <th className="px-4 py-2">Customer Address</th>
                  <th className="px-4 py-2">Customer Contact</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {riderdata &&
                  riderdata.map((order) => (
                    <tr key={order.id} className="border-b">
                      <td className="px-4 py-2">
                        {order.customer.customerName}
                      </td>
                      <td className="px-4 py-2">
                        {
                          order.orderItems[0]?.foodItem.restaurant
                            .restaurantName
                        }
                      </td>
                      <td className="px-4 py-2">
                        {
                          order.orderItems[0]?.foodItem.restaurant
                            .restaurantAddress
                        }
                      </td>
                      <td className="px-4 py-2">{order.address}</td>
                      <td className="px-4 py-2">{order.customer.phone}</td>
                      <td className="px-4 py-2 flex flex-col gap-2">
                        {!order.isDelivered ? (
                          <>
                            <button
                              className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded mr-2"
                              onClick={() => picked()}
                            >
                              Picked
                            </button>
                            <button
                              className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2"
                              onClick={() => delivered(order.id)}
                            >
                              Delivered
                            </button>
                            <button
                              className="bg-[#2F80ED] hover:bg-[#1F65D9] text-white px-2 py-1 rounded"
                              onClick={() => viewLocationOnMap(order.address)}
                            >
                              View Location
                            </button>
                          </>
                        ) : (
                          <span className="text-green-500">Delivered</span>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {riderdata &&
              riderdata.map((order) => (
                <div key={order.id} className="mt-4 ">
                  <h2 className="text-xl font-bold text-[#2F80ED] mb-2">
                    Ordered Items
                  </h2>
                  <div className="list-disc flex justify-center gap-5 list-inside">
                    {order.orderItems.map((item) => (
                      <div key={item.id}>
                        <p className="font-bold">{item.foodItem.foodName}</p>
                        <p>Price: {item.foodItem.price}</p>
                        <p>Quantity: {item.foodItemQuantity}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            {selectedOrder && (
              <ReceiverFile
                address={address}

                order={selectedOrder}
                onClose={closeMapPopup} // Pass the function to close the popup
              />
            )}
          </div>
        </div>
      </div>

      <RiderLocationSend username = {username}/>
      <ToastContainer />
    </>
  );
}
