import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

function OrderPopup({ isOpen, onRequestClose }) {
  const [address, setAddress] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  const handleSubmit = () => {
    // Handle order submission here
    // You can use the 'address', 'promoCode', and 'specialInstructions' variables
    // to send the order data to your server or perform any necessary actions.
    // For this example, we'll simply log the data.
    console.log('Address:', address);
    console.log('Promo Code:', promoCode);
    console.log('Special Instructions:', specialInstructions);

    // Close the modal after submission
    onRequestClose();
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
        <label className="block text-sm font-medium">Special Instructions:</label>
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
