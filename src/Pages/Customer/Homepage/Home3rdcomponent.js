import React, { useState } from 'react'
import Home4thcomponent from './Home4thcomponent';
import { Link } from 'react-router-dom';

function Home3rdcomponent() {
  const [data, setData] = useState([
    "",
    "",
    ""
   
  ]);
  return (
    <div className='backgroundImg1 p-5'>
      <div className='flex justify-center'>
      <img
          src="/Image/vector2.png"
          alt="aboutus"
          className="my-5 ml-[100px]"
        />
      </div>
       <Link to="/resturant"><div className="flex flex-wrap gap-5 mb-5 items-center mx-[120px] justify-around">
          {data.map((value, index) => (
            <div
              key={index}
              className="border-2 h-[400px] backgroundImg1 border-black w-[330px] overflow-hidden"
            >
              <div className="relative h-[280px] overflow-hidden ">
                <img
                  className="h-[280px] w-[650px] transition-transform transform scale-100 hover:scale-110"
                  src="/Image/samay.png"
                  alt=""
                />
              </div>
              <div className="dhamilo flex flex-col justify-center items-center text-white  h-[120px]">
                <div className="text-[#d4f532] flex gap-1">
                  {/* <i className="fa-solid fa-star"></i> */}
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <h1>Samaya Bhajiya</h1>
                <div className="mx-4">
                  {/* <img src={line} alt="" /> */}
                </div>
                <p>Rs 350</p>
              </div>
            </div>
          ))}

          {/* this is a comp */}
        </div></Link>
        
      
      
    </div>
  )
}

export default Home3rdcomponent;
