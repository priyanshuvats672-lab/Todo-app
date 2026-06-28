import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-64 fixed h-full bg-blue-950 px-2 py-7 flex flex-col justify-between'>
        <div>
            <h1 className='text-3xl font-bold flex justify-center text-white'>TaskBar</h1>
            <hr />
            <ul className='mt-3 font-bold text-xl text-white'>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-800 py-2'><a className='px-3' href="#">DashBoard</a></li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-800 py-2'><a className='px-3' href="#">Task</a></li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-800 py-2'><a className='px-3' href="#">Calender</a></li>
            </ul>
            
        </div>
        <button className='bg-red-500 rounded-2xl font-bold text-lg text-white hover:scale-95'>LogOut</button>
      
    </div>
  )
}

export default Sidebar
