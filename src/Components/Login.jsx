import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
    const [data, setData] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data, 'loading');
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            let response = await axios.post('http://localhost:5000/auth/login', data)
            console.log(response.data.user.status, 'ki');
            let token = response.data.token
            let id = response.data.user._id
            localStorage.setItem('token', token)
            localStorage.setItem('id', id)
            setData(data)
            console.log(data, 'doneee');

            if(!response.data.user){

                
                
                toast.error('invalid username or password')
            }

                if(response.data.user.usertype =='admin'){
                    navigate('/admin')
                }
                if(response.data.user.usertype =='parkingProvider'){
                    if(response.data.user.status=='accept'){

                        navigate('/pp')
                    }
                    else{
                        toast.warning('not accepted by admin')
                    }
                }
                if(response.data.user.status=='reject'){
                 
                    toast.error('Admin rejected your request')
                }
            
        }
        catch (e) {
            console.log(e,'error');
            toast.error('invalid username or password')
            
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
            <div class="h-screen md:flex">

                <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
                    <form onSubmit={(e) => { handleSubmit(e) }} class="bg-white">
                        <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                        <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>


                        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input onChange={(e) => handleChange(e)} class="pl-2 outline-none border-none" type="text" name="email" id="" placeholder="Email Address" />
                        </div>
                        <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            <input onChange={(e) => handleChange(e)} class="pl-2 outline-none border-none" type="password" name="password" id="" placeholder="Password" />
                        </div>
                        <button type="submit" class="block w-full  bg-green-500 hover:bg-green-700 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                        <button type="submit" class="block w-full  bg-green-500 hover:bg-green-700 mt-4 py-2 rounded-2xl sm:hidden md:hidden text-white font-semibold mb-2">Sign up</button>
                    </form>
                </div>
                <div
                    class="relative h-[125vh] overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-[#64BF08] to-[#B7E003] i justify-around items-center hidden">
                    <div className='pb-16'>
                        <span class=" text-[3rem] font-semibold whitespace-nowrap dark:text-white">Par<span className='text-orange-500'>KING</span></span>
                        <p class="text-white text-center  mt-1">Don't have a account yet ?</p>
                       <Link to={'/register'}> <button type="submit" class="block hover:bg-green-300 w-28 bg-white text-black mt-4 py-2 rounded-2xl font-bold mb-2">Sign-UP</button></Link>
                    </div>
                    <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                </div>
            </div>
        </div>
    )
}

export default Login