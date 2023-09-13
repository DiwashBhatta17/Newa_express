import React from "react";
import breakfast from "../../../Images/RestroPageImage/bf.png";
import snacks from "../../../Images/RestroPageImage/snack.png";
import drinks from "../../../Images/RestroPageImage/drink.png";
import festival from "../../../Images/RestroPageImage/festH.png";

function AsFestival(props) {
    const {setrole} = props;

  return (
    <div className="flex justify-around items-center backgroundImg1 h-[14vh]">
      
        {" "}
        <button onClick={()=>setrole(1)}>
          {" "}
          <img className="w-[200px]" src={breakfast} alt="" />
        </button>
        <button onClick={()=>setrole(2)}>
          {" "}
          <img className="w-[200px]" src={snacks} alt="" />
        </button>
        <button onClick={()=>setrole(3)}>
          <img className="w-[200px]" src={drinks} alt="" />
        </button>
        <button>
          <img className="w-[200px]" src={festival} alt="" />
        </button>
    
    </div>
  );
}

export default AsFestival;
