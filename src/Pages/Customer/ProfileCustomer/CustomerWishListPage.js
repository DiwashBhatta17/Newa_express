import React, { useEffect, useState } from 'react'
import { getWishlist, removeWishlist } from '../../../Services/CustomerService/wishListService'

function CustomerWishListPage() {
  const [data, setData] = useState([""]);
  const userId = localStorage.getItem("customerId");

  const [ids, setId] = useState(0);


  async function fetchData(){
    const res= await  getWishlist(userId);
    setData(res);
    console.log(res);
    
  }
  async function removeWish(favId){
   try {
    const response = await removeWishlist(favId);
    console.log(response);
    
   } catch (error) {
    console.error(error);
    
   }
  }

  useEffect(()=>{
    fetchData();
  },[ids]);
 


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
          <td><button onClick={()=>{
            removeWish(value.id);
            setId(value.id)
          }}><i className="fa-solid fa-trash-can"></i></button></td>
        </tr>
        ))
       }
        
       
      </tbody>
    </table>
  </div>
  )
}

export default CustomerWishListPage
