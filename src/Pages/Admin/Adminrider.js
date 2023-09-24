import React from "react";
import AdminHeader from "./AdminHeader";

export default function Adminrider() {
  return (
    <>
      <AdminHeader />
      <div className="flex justify-end  pt-[140px] ">
        <div className=" ">
          <h1 className="text-2xl font-bold text-[#2F80ED]">
            Delivery Partner
          </h1>
          <p>View all your registered delivery partners. </p>
          <button className=" ml-[700px] border-[#3cf73cb6]  border-2 text-black w-[110px] rounded-[40px] hover:bg-[#3cf73cb6]">
            Add Riders
          </button>
          <div className="w-[1000px] bg-[#ffffff] mt-[40px] ">
            <table className="table table-hover  table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col"> Name</th>
                  <th scope="col">Contact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Nimesh</td>
                  <td>9878927610</td>
                  <td>
                    <button className="mr-1 border px-3 py-1 rounded-lg text-white bg-[#e3311a]">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
