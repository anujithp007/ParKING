import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navi = () => {
  return (
    <>
        

<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a  class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="data:image/png;base64,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" class="h-8" alt="Flowbite Logo"/>
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Par<span className='text-orange-500'>KING</span></span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="text-white bg-[#92D300] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign-IN</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <Link to={'/home'}>
        <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#92D300] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 " >Home</a>
      </li>
        </Link>
    <Link to={'/about'}>
       <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#92D300] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      </Link> 
    <Link to={'/service'}>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#92D300] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
    </Link>
     <Link to={'/contact'}>
     <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#92D300] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
     </Link> 
    </ul>
  </div>
  </div>
</nav>
<div className='pt-20'>
<Outlet/>

</div>
    </>
  )
}

export default Navi