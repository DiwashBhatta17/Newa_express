import React, { useState } from "react";

function AddMenuItemPopup({ onClose, onSave, setonClose }) {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [spiciness, setSpiciness] = useState("");
  const [category, setCategory] = useState("Breakfast");

  
  const handleSave = () => {
    // Validate and save the item data here
    if (itemName && itemPrice && preparationTime && spiciness) {
      const newItem = {
        itemName,
        itemPrice,
        preparationTime,
        spiciness,
        category,
      };
      onSave(newItem);
      onClose();
    } else {
      // Handle validation error
      alert("Please fill in all fields");
    }
  };

  return (onClose)?
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-2xl font-semibold mb-4">Add Menu Item</h2>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Item Name:</label>
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Item Price:</label>
          <input
            type="number"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Preparation Time:</label>
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            value={preparationTime}
            onChange={(e) => setPreparationTime(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Spiciness:</label>
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            value={spiciness}
            onChange={(e) => setSpiciness(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Category:</label>
          <select
            className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Snacks">Snacks</option>
            <option value="Drinks">Drinks</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
            onClick={()=>setonClose(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  :"";
}

export default AddMenuItemPopup;
