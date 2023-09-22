import React from "react";
import AdminHeader from "./AdminHeader";

export default function Adminreview() {
  return (
    <>
      <AdminHeader />
      <div className="flex justify-end  pt-[140px] ">
        <div className=" ">
          <h1 className="text-2xl font-bold text-[#2F80ED]">
            Customer Reviews
          </h1>
          <p>Add Customer Feedbacks to your Homepage. </p>

          <div className="w-[1000px] bg-[#ffffff] mt-[40px] ">
            <table className="table table-hover  table-striped">
              <thead>
                <tr>
                  <th scope="col">Customer Name</th>
                  <th scope="col"> Contact</th>
                  <th scope="col">Order ID</th>
                  <th scope="col">Restaurant Name</th>
                  <th scope="col">View</th>
                  <th scope="col">Home Display</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rames</td>
                  <td>0983534120</td>
                  <td>01</td>
                  <td>Newa ghar</td>
                  <td>view</td>
                  <td>Display</td>
                </tr>
                <tr>
                  <td>Food Name</td>
                  <td>20$</td>
                  <td>30 Min</td>
                </tr>
                <tr>
                  <td>Food Name</td>
                  <td>20$</td>
                  <td>30 Min</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
