import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';




const Reg = () => {
    const[data,setData]=useState('')
    const navigate=useNavigate()

    const handleChange=(e)=>{
        if(e.target.name=='file'){
            setData({...data,file:e.target.files[0]})
        }
        else{

            setData({...data,[e.target.name]:e.target.value})
        }
        console.log(data,'change');

        
        // Append form data
        
    }
    const handleSubmit= async (e)=>{
        e.preventDefault()
        const formData = new FormData();
        setData(data)
        console.log(data,'done');
        formData.append('username', data.username);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('phonenumber',data.phonenumber);
        formData.append('usertype',data.usertype);
        formData.append('file', data.file);

        try{
                const response= await axios.post('http://localhost:5000/auth/register',formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                  }})
                  console.log(response);
                  data.email&&data.password ?
                  toast.success('registration success') :
                  toast.error('fill the blanks')
                  navigate('/login')


        }
        catch(e){
            console.log(e);
            toast.error('error occured')

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
<ToastContainer/>
<div class="h-screen md:flex">
	<div
		class="relative h-[125vh] overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-[#64BF08] to-[#B7E003] i justify-around items-center hidden">
		<div className='mb-16'>
        <span class="self-center text-[3rem] font-semibold whitespace-nowrap dark:text-white">Par<span className='text-orange-500'>KING</span></span>
			<p class="text-white mt-1">The most popular parking management system</p>
			<Link to={'/login'}><button type="submit" class="block w-28 bg-white text-black hover:bg-green-300 mt-4 py-2 rounded-2xl font-bold mb-2">Login</button></Link>
		</div>
		<div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form onSubmit={(e)=>handleSubmit(e)} class="bg-white m-auto">
			
		
				<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
						viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					</svg>
					<input onChange={(e)=>handleChange(e)} class="pl-2 outline-none border-none" type="text" name="username" id="" placeholder="Username" />
      </div>
					<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input onChange={(e)=>handleChange(e)} class="pl-2 outline-none border-none" type="text" name="email" id="" placeholder="Email Address" />
      </div>
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
      <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-phone h-5 w-5 text-gray-400" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
						<input onChange={(e)=>handleChange(e)} class="pl-2 outline-none border-none" type="number" name="phonenumber" id="" placeholder="Phone Number" />
      </div>
						<div class="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input onChange={(e)=>handleChange(e)} class="pl-2 outline-none border-none" type="password" name="password" id="" placeholder="Password" />
                            
      </div>
      <div>
        <h1 className='text-center mt-5 font-serif text-gray-400 '>User Type</h1>
      <ul class="w-48 text-sm font-medium flex">
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input onChange={(e)=>handleChange(e)} id="list-radio-license" type="radio" value="admin" name="usertype" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="list-radio-license" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Admin </label>
        </div>
    </li>
    
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input onChange={(e)=>handleChange(e)} id="list-radio-military" type="radio" value="user" name="usertype" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="list-radio-military" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">User</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input onChange={(e)=>handleChange(e)} id="list-radio-passport" type="radio" value="parkingProvider" name="usertype" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="list-radio-passport" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Parking Provider</label>
        </div>
    </li>
</ul>
        
<div class="flex items-center justify-center mt-6 gap-4 w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input onChange={(e)=>handleChange(e)} id="dropzone-file" name='file' type="file" class="hidden" />
    </label>
</div> 

      </div>


							<button type="submit" class="block w-full bg-green-500 hover:bg-green-700 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Register</button>
		</form>
	</div>
</div>

    </div>
  )
}

export default Reg