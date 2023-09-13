import React from 'react'

function AdminNavbar() {
  return (
    <>
    <div className='bg-[#d4d0d0] fixed shadow-xl h-screen'>
        <div className='flex w-screen fixed justify-between shadow-xl itmes-center bg-white py-4 px-5'>
            <div className='flex gap-2 '>
            <i className="fa-solid text-2xl mt-[2px] text-black fa-user-lock"></i>
                <h1 className='text-2xl font-bold text-black'>Resturent Name</h1>
            </div>
            <button className=' px-5 py-2 rounded-full border-2 border-[#a42222]'>Logout</button>
        </div>
        <div className='w-[30vh] top-[11vh] fixed flex flex-col items-start p-5 gap-4 h-[70vh] mt-4 bg-white shadow-xl'>
            <div className='flex gap-3'>
            <i className="fa-light text-xl fa-table-columns"></i>
                <a className='mt-[3px] ' href="#">Dashboard</a>
            </div>

            <div className='flex gap-2'>
            <i className="fa-solid mt-1 fa-users"></i>
                <a href="#">Orders</a>
            </div>

            <div className='flex gap-[10px]'>
            <i className="fa-regular mt-1 fa-hourglass"></i>
                <a className='ml-2' href="#">Menus</a>
            </div>

            <div className='flex gap-3'>
            <i className="fa-regular mt-1 fa-chart-bar"></i>
                <a className='' href="#">Analytics</a>
            </div>
        </div>
        <div className='bg-white fixed top-[84vh] left-0 mt-3 w-[30vh] h-[10vh] flex flex-col shadow-xl items-center gap-1'>
            <h1 className='mt-2'>Newa Express</h1>
            <p>version: 1.0.0.11</p>
        </div>
    </div>
    </>
  )
}

export default AdminNavbar
