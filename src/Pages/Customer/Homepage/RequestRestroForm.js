import React, { useState } from 'react';

const RequestRestroForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    restaurantName: '',
    address: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
    
    onClose(); // Close the form after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-red-500 rounded-lg p-6 w-96">
        <h2 className="text-2xl text-white mb-4">Send a Request</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleChange}
              placeholder="Restaurant Name"
              className="w-full p-2 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full p-2 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-2 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full p-2 rounded-lg"
              rows="4"
              required
            />
          </div>
          <div className="justify-between flex">
            <button
              type="submit"
              className="bg-white text-red-500 py-2 px-4 rounded-full hover:bg-red-500 hover:text-white transition duration-300"
            >
              Send Request
            </button>
            <button onClick={()=>onClose(false)} className="bg-white text-red-500 py-2 px-4 rounded-full hover:bg-red-500 hover:text-white transition duration-300">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestRestroForm;
