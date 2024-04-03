import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PPlanding = () => {
  const [data,setData]=useState('')
  const id=localStorage.getItem('id')
  const token=localStorage.getItem('token')
  useEffect(()=>{
    
    
    const fetchData=async ()=>{
        try{
        let response = await axios.get(`http://localhost:5000/parking/singlepp/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log(response,'king');
        setData(response.data)
      }
      catch(e){
        console.log(e.message);
      }


    }
    fetchData()
    console.log(data,'hjj');
  },[])
  return (
    <div className='bg-green-500'>

    <div className='text-center text-white font-bold text-[6rem]'>
      Hello {data.username}
    </div>
    <h2 className='text-center font-serif  text-[4rem]'>Create Your Slots,Provide your slots and <br /> earn with us</h2>
    <h2 className='text-center text-[3rem] text-orange-600 font-bold'>Over 1 Lakh trusted parking partners!!!</h2>
    <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 m-auto text-center me-2 mb-2">Get started</button>
    </div>

  )
}

export default PPlanding