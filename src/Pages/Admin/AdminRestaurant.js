import React, { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import AddRestaurantpopup from "./Popups/AddRestaurantpopup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminRestaurant() {
  //popup logic
  const [popups, setPopups] = useState(false);
  function handleopenPopup() {
    setPopups(true);
  }

  function handleclosePopup() {
    setPopups(false);
    console.log("Button thichiyo tara kaam vayena.");
  }

  //restaurants logic
  const [restaurants, setRestaurants] = useState([]);
  const keysToDisplay = [
    "restaurantId",
    "restaurantName",
    "restaurantAddress",
    "phone",
    "tagline",
  ];

  useEffect(() => {
    axios
      .get("http://localhost:8080/restaurants/get-all-restaurants")
      .then((resp) => {
        console.log(resp.data);
        setRestaurants(resp.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  // deleting restaurants
  const handleDelete = (restaurantId) => {
    axios
      .delete(
        `http://localhost:8080/restaurants/delete-restaurant/${restaurantId}`
      )
      .then((resp) => {
        if (resp.status === 200) {
          const updatedRestaurants = restaurants.filter(
            (restaurant) => restaurant.restaurantId !== restaurantId
          );
          setRestaurants(updatedRestaurants);
        }
      })
      .catch((error) => {
        console.log("Error deleting restaurant:", error);
      });
    //succesfulDeletion Toast
    toast.success("Succesfully deleted");
  };

  return (
    <>
      <AdminHeader />
      <div className="flex justify-end pt-[140px] ">
        <div className="">
          <h1 className="text-2xl font-bold text-[#2F80ED]">
            Restaurants List
          </h1>
          <p>View all your connected restaurants here. </p>
          <h1
            className="border-2 border-[#41c441] bg-[white] ml-[800px] text-[green] rounded-[20px] w-[125px] p-1 hover:cursor-pointer hover:text-white hover:bg-[#41c441]
            "
            onClick={handleopenPopup}
          >
            Add Restaurant
          </h1>
          {popups && <AddRestaurantpopup onClose={handleclosePopup} />}
          <div className="w-[1000px] bg-[#ffffff] mt-[40px] ">
            <table className="table table-hover  table-striped">
              <thead>
                <tr>
                  {keysToDisplay.map((key, index) => (
                    <th key={index} scope="col">
                      {key}
                    </th>
                  ))}
                  <th scope="col">Delete Restro</th>
                </tr>
              </thead>
              <tbody>
                {restaurants.map((restaurant, index) => (
                  <tr key={index}>
                    {keysToDisplay.map((key, index) => (
                      <td key={index}>{restaurant[key]}</td>
                    ))}
                    <td>
                      <button
                        className="bg-[red] text-[white] w-[60px] hover:bg-[#ff00008f]"
                        onClick={() => handleDelete(restaurant.restaurantId)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
