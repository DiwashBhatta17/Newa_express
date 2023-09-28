import React, { useEffect, useState } from 'react'
import { getWishlist } from '../../../Services/CustomerService/wishListService'

function CustomerWishListPage() {
  const [data, setData] = useState([""]);
  const userId = localStorage.getItem("customerId");


  async function fetchData(){
    const res= await  getWishlist(userId);
    setData(res);
    console.log(res);
    
  }

  useEffect(()=>{
    fetchData();
  },[]);


  return (
    <div className="ml-5 mt-2 flex flex-col items-center h-full overflow-y-auto w-[550px]">
    <table class="table table-striped  table-hover">
      <thead >
        <tr className=" font-thin">
          <th scope="col">Image</th>
          <th scope="col">Item Name</th>
          <th scope="col">Price</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
       {
        data?.map((value)=>(
          <tr key={value.id} className='item-center '>
          <th scope="row"><img className='w-[50px]' src={value.images} alt="" /></th>
          <td>{value.foodItem?.foodName}</td>
          <td>Rs: {value.foodItem?.price}</td>
          <td><i className="fa-solid fa-trash-can"></i></td>
        </tr>
        ))
       }
        <tr className='item-center '>
          <th scope="row"><img className='w-[50px]' src="/Image/yomarichi.png" alt="" /></th>
          <td>Yamorich</td>
          <td>Rs 250</td>
          <td><i className="fa-solid fa-trash-can"></i></td>
        </tr>
       
      </tbody>
    </table>
  </div>
  )
}

export default CustomerWishListPage
