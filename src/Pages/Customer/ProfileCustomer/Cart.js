import React, { useEffect, useState } from 'react';
import { getCartItem } from '../../../Services/CustomerService/cartService';
import CustomerOrderPage from './CustomerOrderPage';
import OrderPopup from './OrderPopup';
import { addQuantity,subQuantity } from '../../../Services/CustomerService/cartService';
import { removeCart } from '../../../Services/CustomerService/cartService';

function Cart(props) {
  const { isCartOpen } = props;
  const userId = localStorage.getItem("customerId");
  const [isOpen , setisOpen] = useState(false);

  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10.00, quantity: 1 },
   
  ]);
  const [top, setTop] = useState(null);

  async function add(id){
    const response = await addQuantity(top.id, id);
    console.log(cartItems.id);
    console.log(response);
  }

  async function sub(id){
    const response = await subQuantity(top.id, id);
    console.log(response);
  }

  async function remove(ids){
    const response = await removeCart(ids);
    console.log(response);
  }

  // const totalPrice = cartItems.reduce((total, item) => total + item.cartItems.foodPrice * item.cartItems.cartFoodItemQuantity, 0);

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

  async function fetchCartItem(){
    const response = await getCartItem(userId)
    setCartItems(response.cartItems);
    setTop(response);
    console.log(response);
  }
  useEffect(()=>{
    fetchCartItem();
  },
  []);

  return (
    <div>
      {isCartOpen && (
        <div className="text-black w-[400px] absolute right-[196px] mt-4">
          {/* Arrow frame */}
          <div className="absolute -top-3 left-[80%] transform -translate-x-1/2 ">
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
                      {item.foodItem.foodName}   -   Rs {item.foodPrice.toFixed(2)}  x  {item.cartFoodItemQuantity}
                    </span>
                    <div className="flex gap-4">
                      <button
                        onClick={() => add(item.foodItem.id)}
                        className="bg-green-500 text-white px-[10px] py-1 rounded"
                      >
                        +
                      </button>
                      <button
                        onClick={() => sub(item.foodItem.id)}
                        className="bg-red-500 text-white px-[10px] py- rounded"
                      >
                        -
                      </button>
                      <button onClick={()=>remove(item.id)} className=''><i className='fa-solid fa-trash'></i></button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <strong>Total: Rs{top.cartTotalPrice}</strong>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full"
              onClick={() => {
               setisOpen(true);
              }}
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}
      <OrderPopup isOpen={isOpen} setisOpen={setisOpen} />
    </div>
  );
}

export default Cart;
