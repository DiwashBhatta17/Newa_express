import React from "react";
import ResturantNavbar from "./ResturantNavbar";

function ResturantOrderList() {
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
                  <th scope="col">Rider Name</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Instructions</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mark</th>
                  <td>Tony</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td><button className="mr-1 border px-3 py-1 rounded-lg text-white bg-[#4f9cdf]">Received</button><button className="mr-1 border px-3 py-1 rounded-lg text-white bg-[#49e78e]">Picked</button></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td><button className="mr-1 border px-3 py-1 rounded-lg text-white bg-[#4f9cdf]">Received</button><button className="mr-1 border px-3 py-1 rounded-lg text-white bg-[#49e78e]">Picked</button></td>

                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="">Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td><button className="mr-1 border px-3 py-1 rounded-lg text-white bg-[#4f9cdf]">Received</button><button className="mr-1 border px-3 py-1 rounded-lg text-white bg-[#49e78e]">Picked</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResturantOrderList;
