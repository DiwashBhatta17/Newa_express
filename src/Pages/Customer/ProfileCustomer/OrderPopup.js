import React, { useState } from "react";
import Modal from "react-modal";
import { confirmOrder } from "../../../Services/CustomerService/cartService";

Modal.setAppElement("#root"); // Set the root element for accessibility

function OrderPopup({ isOpen, setisOpen }) {
  const [address, setAddress] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");

  const [onRequestClose, setonRequestClose] = useState(false);

  const userId = localStorage.getItem("customerId");

  const handleSubmit = async () => {
    const data = {
      address: address,
      promocode: promoCode,
      speciaInstruction: specialInstructions,
    };
    const response = await confirmOrder(userId, data);
    console.log(response);
    setisOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="order-modal p-4 rounded-lg bg-white max-w-md mx-auto"
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
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-600"
      >
        Confirm Order
      </button>
    </Modal>
  );
}

export default OrderPopup;
