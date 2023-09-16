import React from 'react'
import ResturantNavbar from './ResturantNavbar'

function ResturantMenu() {
  return (
    <>
    <ResturantNavbar />
    <div className="flex justify-center  pt-[140px]">
      <div className=" ">
        <h1 className="text-2xl font-bold text-[#2F80ED]">Menu List</h1>
        <p>Here is your Menu list </p>
        <div className="w-[1000px]">
          <table className="table table-hover  table-striped">
            <thead>
              <tr>
                
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Preparation Time</th>
                <th scope="col">Spiceness</th>
                <th scope="col">Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Food Name</th>
                <td>20$</td>
                <td>30 Min</td>
                <td>5</td>
                <td>Food</td>
                <td><button className="mr-1 border px-3 py-1 rounded-lg text-white bg-[#e3311a]">Delete</button></td>
              </tr>
              <tr>
                <th scope="row">Food Name</th>
                <td>20$</td>
                <td>30 Min</td>
                <td>5</td>
                <td>Food</td>
                <td><button className="mr-1 border px-3 py-1 rounded-lg text-white bg-[#e3311a]">Delete</button></td>
              </tr>
              <tr>
                <th scope="row">Food Name</th>
                <td>20$</td>
                <td>30 Min</td>
                <td>5</td>
                <td>Food</td>
                <td><button className="mr-1 border px-3 py-1 rounded-lg text-white bg-[#e3311a]">Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
  )
}

export default ResturantMenu
