import React from 'react'
import './landing.css'

const Landing = () => {
  return (
    <>
    <div className='bg1 h-screen '>
      <div className='bg-blue-500/25   h-screen'>
        <h1 className='text-white/100 text-refresh-animation   text-[3rem]  text-center kanit-regular sm:text-[4rem] pt-28'>We Have The Best Deals For Parking  <br />Lots !</h1>
        <p className='text-center  text-[1.5rem] sm:text-[2rem] text-white font-serif waviy ' >Instanly book your space today.Trusted by millions</p>
        <p className='text-center text-white text-[1rem] sm:text-[1.5rem] pt-5 '> <span className='flipX'>Wanna Book Your Slot ?</span>
         <button className='w-[10rem] h-[3rem]  bg-[#92D300] hover:bg-green-800 font-serif m-auto mt-3 block text-[20px] rounded-md text-[15px]] font-bold'>Register</button> </p>

      </div>
    </div>



    </>
  )
}

export default Landing