import React, { useState } from "react";
import ResturantNavbar from "./ResturantNavbar";
import orderItemService from "../../Services/restaurantService/orderItemService";

function ResturantOrderList() {
  const [data, setData] = useState([""]); 

  async function fetchData(){
    const response = await orderItemService()
    setData(response)
  }
  return (
    <>
      <ResturantNavbar />
      <div className="flex justify-center  pt-[140px]">
        <div className=" ">
          <h1 className="text-2xl font-bold text-[#2F80ED]">Order List</h1>
          <p>Here is your order list data</p>
          <div className="w-[1000px]">
            <table className="table table-hover  table-striped">
              <thead>
                <tr>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Special Instruction</th>
                  <th scope="col">items</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                

              {data.map((value)=>(
                <tr key={value.id}>
                {/* <th scope="row">{value.customer.customerName}</th> */}
                <td>{value.specialInstruction}</td>
                <td></td>
                <td>@mdo</td>
                <td><button className="mr-1 border px-3 py-1 rounded-lg text-white bg-[#4f9cdf]">Received</button><button className="mr-1 border px-3 py-1 rounded-lg text-white bg-[#49e78e]">Picked</button></td>
              </tr>
              ))}

               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResturantOrderList;
