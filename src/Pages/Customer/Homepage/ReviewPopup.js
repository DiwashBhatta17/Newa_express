import React, { useState } from 'react';

const ReviewPopup = ({ onClose }) => {
  const [rating, setRating] = useState(0); // Rating from 1 to 5

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
    // You can also send this rating to your backend or perform other actions here.
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="bg-red-600 text-white rounded-lg shadow-lg p-4 max-w-md w-full">
        <button
          className="absolute top-2 right-2 text-lg cursor-pointer"
          onClick={onClose}
        >
          &#10005;
        </button>
        <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>
        <div className="flex justify-between mb-4">
          <div className="text-xl">How was your experience?</div>
          <div className="text-xl">
            {Array.from({ length: 5 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleRatingClick(index + 1)}
                className={`text-3xl ${
                  index < rating ? 'text-yellow-500' : 'text-gray-300'
                }`}
              >
                &#9733;
              </button>
            ))}
          </div>
        </div>
        <textarea
          placeholder="Your feedback..."
          className="w-full h-32 px-3 py-2 text-lg rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>
        <button
          className="mt-4 py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default ReviewPopup;
