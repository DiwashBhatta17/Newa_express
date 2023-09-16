import React from "react";

import CustomerNavbar from "./Pages/Customer/customerNavbar";
import Resturent1stComp from "./Pages/Customer/ResturentPage/Resturent1stComp";
import AsBreakfast from "./Pages/Customer/ResturentPage/menuNavbar/asBreakfast";
import Restcomponent from "./Pages/Customer/ResturentPage/Homepage/Restcomponent";
import Resturent2ndComp from "./Pages/Customer/ResturentPage/Resturent2ndComp";
import Topcomponent from "./Pages/Customer/ResturentPage/Homepage/Topcomponent";
import Itempopup from "./Pages/Customer/ResturentPage/Itempopup";

function App() {
  return (
    <>
      <Topcomponent />
      <Restcomponent />
      <Resturent1stComp />
      {/* <Itempopup /> */}
    </>
  );
}

export default App;
