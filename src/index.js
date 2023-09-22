import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Topcomponent from './Pages/Customer/Homepage/Home1stcomponent';
import Resturent1stComp from './Pages/Customer/ResturentPage/Resturent1stComp';
import ResturantDashboard from './Pages/Resturant/ResturantDashboard';
import ResturantMenu from './Pages/Resturant/ResturantMenu';
import ResturantOrderList from './Pages/Resturant/ResturantOrderList';
import Browse1 from './Pages/Customer/BrowseRestropage/Browse1';
import { Provider } from 'react-redux';
import store from './Services/Redux-Service/store';

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Topcomponent/>,
  },
  {
    path: "restaurant/:restaurantId",
    element: <Resturent1stComp/>,
  },
  {
    path: "browseResturant",
    element: <Browse1/>
  },
  // Resturant part

  {
    path: "resturantDashboard",
    element: <ResturantDashboard/>,
  },
  {
    path: "resturantMenu",
    element: <ResturantMenu/>,
  },
  {
    path: "resturantOrderList",
    element: <ResturantOrderList/>,
  },
  

]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={routerConfig} />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
