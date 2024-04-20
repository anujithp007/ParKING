import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const CarView = () => {
  const [data,setData]=useState([''])
  const token=localStorage.getItem('token')
  const id=localStorage.getItem('id')
  const navigate=useNavigate()

  useEffect(()=>{
    const fetchData= async ()=>{
      const response= await axios.get(`http://localhost:5000/parking/carspot/${id}`)
      console.log(response,'vt');
      setData(response.data)
    }
    fetchData()
  },[])
  console.log(data,'car');
  if (!token) {
    navigate('/login');
}
  return (
    <div>

    <div className='flex flex-wrap mt-7 gap-5 justify-center items-center'>
    {data.map((item, index) => (
      <a key={index} href="#" className="block max-w-sm p-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h1>{item.spotname}</h1>
        </a>
    ))}
</div>
<ul className='list-disc p-9'>
    <li>C - Regular Spot</li>
    <li>A - Differently abled spot</li>
</ul>
    </div>
  )
}

export default CarView