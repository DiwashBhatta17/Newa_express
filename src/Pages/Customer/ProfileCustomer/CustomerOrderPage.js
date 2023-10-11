import React, { useEffect, useState } from "react";
import orderHistoryService from "../../../Services/CustomerService/orderHistoryService";

function CustomerOrderPage() {
  const userID = localStorage.getItem("customerId");

  const [data, setData] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  async function fetchData() {
    try {
      const response = await orderHistoryService(userID);
      setData(response);
    } catch (error) {
      console.error("Error", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle row click
  const handleRowClick = (order) => {
    setSelectedOrder(order);
  };

  // Function to get the restaurant name
  const getRestaurantName = (order) => {
    if (order.orderItems.length > 0) {
      return order.orderItems[0].foodItem.restaurant.restaurantName;
    }
    return "";
  };

  // Function to display order items with food names
  const renderOrderItems = () => {
    if (selectedOrder) {
      return (
        <div>
          <h2>Order Items for {getRestaurantName(selectedOrder)}</h2>
          <ul>
            {selectedOrder.orderItems.map((item) => (
              <li key={item.id}>{item.foodItem.foodName}</li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="ml-5 mt-2 flex flex-col items-center h-full overflow-y-scroll w-[550px]">
      {/* Apply a fixed height and scroll to the container */}
      <div style={{ height: "400px", overflowY: "auto" }}>
        <table className="table table-striped table-hover">
          <thead>
            <tr className="font-thin">
              <th scope="col">Restaurant Name</th>
              <th scope="col">Total Price</th>
              <th scope="col">Order Date</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((order) => (
              <tr
                key={order.id}
                onClick={() => handleRowClick(order)}
                style={{ cursor: "pointer" }}
              >
                <td>{getRestaurantName(order)}</td>
                <td>Rs {order.totalPrice}</td>
                <td>{order.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Display selected order items */}
      {renderOrderItems()}
    </div>
  );
}

export default CustomerOrderPage;
