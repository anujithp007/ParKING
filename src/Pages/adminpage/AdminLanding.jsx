import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


const AdminLanding = () => {
    const[data,setData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        let token=localStorage.getItem('token')
        const fetchData=async ()=>{
            try{

                let response = await axios.get('http://localhost:5000/parking/ppdetails', {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
                setData(response.data)
            }
            catch(e){
               navigate('/login')
            }
        }
        fetchData()
    },[])
    console.log(data,'ppdata');

    const handleAccept=(id)=>{
        try{

            let response=axios.put(`http://localhost:5000/admin/accept/user/${id}`)
            toast.success('accepted the parking provider')

        }
        catch(e){
            console.log(e);
        }

    }

    const handleReject=(id)=>{
        try{

            let response=axios.put(`http://localhost:5000/admin/reject/user/${id}`)
            toast.success('reject parking provider')
            
        }
        catch(e){
            console.log('error occured');
        }
    }
  return (
    <div>
        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
            <ToastContainer />
       {data.map(item => (
        

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 mt-4 rounded-full shadow-lg" src={`http://localhost:5000/${item.file}`} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.username}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{item.email}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">{item.status}</span>
        <div class="flex mt-4 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{handleAccept(item._id)}}>Accept</a>
            <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={()=>handleReject(item._id)}>Reject</a>
        </div>
    </div>
</div>



))}

    
    </div>
  )
}

export default AdminLanding