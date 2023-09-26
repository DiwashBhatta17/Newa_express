import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Topcomponent from "./Pages/Customer/Homepage/Home1stcomponent";
import Resturent1stComp from "./Pages/Customer/ResturentPage/Resturent1stComp";
import ResturantDashboard from "./Pages/Resturant/ResturantDashboard";
import ResturantMenu from "./Pages/Resturant/ResturantMenu";
import ResturantOrderList from "./Pages/Resturant/ResturantOrderList";
import AdminHeader from "./Pages/Admin/AdminHeader";
import Browse1 from "./Pages/Customer/BrowseRestropage/Browse1";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminRestaurant from "./Pages/Admin/AdminRestaurant";
import Adminrider from "./Pages/Admin/Adminrider";
import Adminreview from "./Pages/Admin/Adminreview";
import Riderdashboard from "./Pages/Rider/Riderdashboard";
import Riderprofile from "./Pages/Rider/Riderprofile";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Topcomponent />,
  },
  {
    path: "resturant",
    element: <Resturent1stComp />,
  },
  // Resturant part

  {
    path: "resturantDashboard",
    element: <ResturantDashboard />,
  },
  {
    path: "resturantMenu",
    element: <ResturantMenu />,
  },
  {
    path: "resturantOrderList",
    element: <ResturantOrderList />,
  },
  {
    path: "browseResturant",
    element: <Browse1 />,
  },

  //Admin part
  {
    path: "adminnav",
    element: <AdminHeader />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
  {
    path: "/adminRestaurant",
    element: <AdminRestaurant />,
  },
  {
    path: "/adminRider",
    element: <Adminrider />,
  },
  {
    path: "/adminreviews",
    element: <Adminreview />,
  },

  //
  {
    path: "/riderdashboard",
    element: <Riderdashboard />,
  },
  {
    path: "/riderprofile",
    element: <Riderprofile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={routerConfig} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
