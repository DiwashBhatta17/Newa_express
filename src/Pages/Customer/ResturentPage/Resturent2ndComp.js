import React, { useState } from "react";
import AsBreakfast from "./menuNavbar/asBreakfast";
import AsSnacks from "./menuNavbar/asSnacks";
import AsDrinks from "./menuNavbar/asDrinks";
import AsFestival from "./menuNavbar/asFestival";

function Resturent2ndComp() {
  const [role, setrole] = useState(1);

  let componentToRender;

  switch (role) {
    case 1:
      componentToRender = <AsBreakfast setrole={setrole}/>;
      break;
    case 2:
      componentToRender = <AsSnacks setrole={setrole}/>;
      break;
    case 3:
      componentToRender = <AsDrinks setrole={setrole}/>;
      break;
    case 4:
      componentToRender = <AsFestival setrole={setrole}/>;
      break;
    default:
      componentToRender = <AsBreakfast setrole={setrole}/>
      break;
  }
  return <> {componentToRender}</>;
}

export default Resturent2ndComp;
