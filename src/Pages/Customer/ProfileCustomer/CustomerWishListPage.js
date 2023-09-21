import React from 'react'

function CustomerWishListPage() {
  return (
    <div className="ml-5 mt-2 flex flex-col items-center h-full overflow-y-auto w-full">
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
        <tr className='item-center '>
          <th scope="row"><img className='w-[50px]' src="/Image/yomarichi.png" alt="" /></th>
          <td>Yamorich</td>
          <td>Rs 250</td>
          <td><i className="fa-solid fa-trash-can"></i></td>
        </tr>
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
