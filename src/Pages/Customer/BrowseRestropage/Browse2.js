import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import restu from "../../Images/RestroPageImage/bgRestu.png";
import CustomerNavbar from '../customerNavbar';
import Footer from '../Footer';


function Browse2() {
    

    const [data, setData] = useState(["","","","","","","",""])
  return (
    <div className='backgroundImg1 mb-5'> 
    <div className='py-5 px-[120px]'>
        <img className='w-[30%]' src="/Image/restroList.png" alt="" />
    </div>
       <div className='pb-[280px]'>
       <Link to="/resturant">
        <div className="flex backgroundImg2 py-5 flex-wrap gap-3 items-cente justify-center mx-[110px] ">
          {data.map((value, index) => (
            <div
              key={index}
              className="border-2  h-[300px] backgroundImg1 border-black w-[280px] overflow-hidden"
            >
              <div className="h-[190px] overflow-hidden ">
                <img
                  className="h-[240px] -z-30 w-[650px] transition-transform transform  scale-110 hover:scale-125"
                  src={restu}
                  alt=""
                />
              </div>
              <div className=" flex item-center justify-center absolute ml-[100px] -mt-[80px]">
                
                <img className="" src="/Image/logo1.png" alt="" />
              </div>

              <div className="bg-[#0e0e0e97] flex flex-col justify-center items-center text-white  h-[130px]">
                <div className="text-[#d4f532] flex gap-1">
                  {/* <i className="fa-solid fa-star"></i> */}
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <h1 className="text-[#f24d4d] text-xl font-bold">Swagatam Newari Resturant</h1>
                <p className="text-[#e2dddd]">Srijanagar Kathmandu</p>
                <div className="mx-4">{/* <img src={line} alt="" /> */}</div>
                
              </div>
            </div>
          ))}

          {/* this is a comp */}
        </div>
      </Link>
       </div>
       <Footer/>
      
    </div>
  )
}

export default Browse2
