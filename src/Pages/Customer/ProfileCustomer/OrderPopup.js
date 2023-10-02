import React, { useState } from "react";
import Modal from "react-modal";
import { confirmOrder } from "../../../Services/CustomerService/cartService";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "@chakra-ui/react";
import MarkerMap from "../../../Services/Locations/locationMarker";

Modal.setAppElement("#root"); // Set the root element for accessibility

function OrderPopup({ isOpen, setisOpen }) {
  const [address, setAddress] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showMap, setShowMap] = useState(false); // State to toggle map visibility

  // State to hold the location coordinates
  const [locationCoordinates, setLocationCoordinates] = useState(null);

  const userId = localStorage.getItem("customerId");

  // Function to update the address when a new location is selected
  const updateAddress = (newCoordinates) => {
    setLocationCoordinates(newCoordinates);
    // You can use a reverse geocoding service to get the address from coordinates
    // Example:
    // const newAddress = reverseGeocode(newCoordinates);
    // setAddress(newAddress);
  };

  const handleChooseOnMapClick = () => {
    setShowMap(true); // Show the map when the "Choose on Map" button is clicked
  };

  const handleSubmit = async () => {
    setIsSubmitted(true);
    const data = {
      address: address,
      promocode: promoCode,
      specialInstruction: specialInstructions,
    };
    const response = await confirmOrder(userId, data);
    console.log(response);
    setisOpen(false);
    toast.success("Order sent!", {
      position: "top-center",
      autoClose: 2000,
      transition: Flip,
    });
    setIsSubmitted(false);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={setisOpen}
        className="order-modal p-4 rounded-lg bg-[#ece8e8] w-[500px] mx-auto text-black"
        overlayClassName="order-modal-overlay dhamilo fixed inset-0 flex items-center justify-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
        <div className="form-group">
          <label className="block text-sm font-medium">Delivery Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your delivery address"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium">Promo Code:</label>
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code (if applicable)"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium">
            Special Instructions:
          </label>
          <textarea
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            placeholder="Any special instructions for your order?"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Conditionally render the MarkerMap component when showMap is true */}
        {showMap && <MarkerMap updateAddress={updateAddress} />}
        {/* Show the "Choose on Map" button only when the map is not visible */}
        {!showMap && (
          <button
            onClick={handleChooseOnMapClick}
            className="bg-white  border-2 border-red-500 text-red-500 px-4 py-2 rounded mt-4 w-full hover:bg-red-600"
          >
            Choose on Map
          </button>
        )}
        <button
          onClick={handleSubmit}
          className="bg-white border-2 border-red-500 text-red-500 px-4 py-2 rounded mt-4 w-full hover:bg-red-600"
        >
          {isSubmitted ? <Spinner /> : <p>Confirm Order</p>}
        </button>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default OrderPopup;
