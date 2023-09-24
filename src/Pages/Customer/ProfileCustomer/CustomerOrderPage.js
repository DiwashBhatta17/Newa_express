import React from "react";

function CustomerOrderPage() {
  return (
    <div className="ml-5 mt-2 flex flex-col items-center h-full overflow-y-auto  w-[550px]">
      <table class="table table-striped  table-hover">
        <thead >
          <tr className=" font-thin">
            <th scope="col">Item Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Order Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Yamorie</th>
            <td>5</td>
            <td>Rs 250</td>
            <td>02/21/2023</td>
          </tr>
          <tr>
            <th scope="row">Yamorie</th>
            <td>5</td>
            <td>Rs 250</td>
            <td>02/21/2023</td>
          </tr>
          <tr>
            <th scope="row">Yamorie</th>
            <td>5</td>
            <td>Rs 250</td>
            <td>02/21/2023</td>
          </tr>
          <tr>
            <th scope="row">Yamorie</th>
            <td>5</td>
            <td>Rs 250</td>
            <td>02/21/2023</td>
          </tr>
          <tr>
            <th scope="row">Yamorie</th>
            <td>5</td>
            <td>Rs 250</td>
            <td>02/21/2023</td>
          </tr> <tr>
            <th scope="row">Yamorie</th>
            <td>5</td>
            <td>Rs 250</td>
            <td>02/21/2023</td>
          </tr> <tr>
            <th scope="row">Yamorie</th>
            <td>5</td>
            <td>Rs 250</td>
            <td>02/21/2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CustomerOrderPage;
