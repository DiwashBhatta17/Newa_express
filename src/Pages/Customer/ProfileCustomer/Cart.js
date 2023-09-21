import React, { useState } from 'react';

function Cart(props) {
  const { isCartOpen } = props;

  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10.00, quantity: 1 },
    { id: 2, name: 'Product 2', price: 15.00, quantity: 1 },
    { id: 3, name: 'Product 3', price: 20.00, quantity: 1 },
  ]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div>
      {isCartOpen && (
        <div className="text-black w-[300px] absolute right-[196px] mt-4">
          {/* Arrow frame */}
          <div className="absolute -top-3 left-[73%] transform -translate-x-1/2 ">
            <i className="text-[#fc1e1e] text-xl fa-solid fa-caret-up"></i>
          </div>

          {/* Cart content */}
          <div className="bg-white border-2 border-[#fc1e1e] rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Your Cart</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="mb-2">
                  <div className="flex justify-between">
                    <span>
                      {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-green-500 text-white px-2 py-1 rounded"
                      >
                        +
                      </button>
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <strong>Total: ${totalPrice.toFixed(2)}</strong>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full"
              onClick={() => {
                // Handle confirm order action
              }}
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
