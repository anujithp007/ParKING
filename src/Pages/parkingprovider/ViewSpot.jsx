import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ViewSpot = () => {
  return (
    <div>
        <div className='flex justify-center items-center gap-6 mt-9'>
      <Link to={'/pp/viewspot/bike'}>
         <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Bike</button>
         </Link> 
   <Link to={'/pp/viewspot/car'}>
        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Car</button>
    </Link> 
        </div>

        <Outlet/>
    </div>
  )
}

export default ViewSpot