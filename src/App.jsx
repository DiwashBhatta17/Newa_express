import React from 'react';
import MapContainer from './Services/Locations/MapContainer';
import UserGetLocation from './Services/Locations/LiveTracking/getRiderLiveLocation';
import RiderLocationSend from './Services/Locations/LiveTracking/sendRiderLiveLocation';
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const routerConfig = createBrowserRouter([
  {
    path: "/customerLook/:username",
    element: <UserGetLocation/>
},
{
    path: "/riderLocation",
    element: <RiderLocationSend/>
},
 
]);

function App() {
  // Replace these with the actual latitude and longitude values
  // const yourLatitude = 28.785; // Example latitude
  // const yourLongitude = 84.4194; // Example longitude

  return (
    <>
    {/* <Provider > */}
   
  
   {/* <UserGetLocation/> */}
 <RouterProvider router={routerConfig} />

{/* </Provider> */}
</>
    
       
  );
}

export default App;
