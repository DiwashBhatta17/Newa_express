import React from "react";
import ResturantDashboard from "./Pages/Resturant/ResturantDashboard";
import ResturantOrderList from "./Pages/Resturant/ResturantOrderList";
import ResturantMenu from "./Pages/Resturant/ResturantMenu";
import Footer from "./Pages/Customer/Footer";
import Resturent1stComp from "./Pages/Customer/ResturentPage/Resturent1stComp";
import AsBreakfast from "./Pages/Customer/ResturentPage/menuNavbar/asBreakfast";
import Resturent2ndComp from "./Pages/Customer/ResturentPage/Resturent2ndComp";
import Topcomponent from "./Pages/Customer/ResturentPage/Homepage/Topcomponent";
import Restcomponent from "./Pages/Customer/ResturentPage/Homepage/Restcomponent";

function App() {
  function arrayOfNumber(array) {}
  return (
    <>
      {/* <ResturantDashboard/> */}
      {/* <ResturantOrderList/> */}
      {/* <Resturent1stComp/> */}
      {/* <Resturent2ndComp/> */}
      <Topcomponent />
      <Restcomponent />

      {/* <Footer/> */}
      {/* <AsBreakfast/> */}
    </>
  );
}

export default App;
