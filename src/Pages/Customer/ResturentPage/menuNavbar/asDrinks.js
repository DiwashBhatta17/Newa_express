import React from "react";
import breakfast from "../../../Images/RestroPageImage/bf.png";
import snacks from "../../../Images/RestroPageImage/snack.png";
import drinks from "../../../Images/RestroPageImage/drinkH.png";
import festival from "../../../Images/RestroPageImage/fest.png";

function AsDrinks(props) {
    const {setrole} = props;

  return (
    <div className="flex justify-around items-center  h-[14vh]">
      
        {" "}
        <button onClick={()=>setrole(1)}>
          {" "}
          <img className="w-[200px] hover:scale-110" src={breakfast} alt="" />
        </button>
        <button onClick={()=>setrole(2)}>
          {" "}
          <img className="w-[200px] hover:scale-110" src={snacks} alt="" />
        </button>
        <button>
          <img className="w-[200px] hover:scale-110" src={drinks} alt="" />
        </button>
        <button onClick={()=>setrole(4)}>
          <img className="w-[200px] hover:scale-110" src={festival} alt="" />
        </button>
    
    </div>
  );
}

export default AsDrinks;
