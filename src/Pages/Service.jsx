import React, { useEffect, useState } from 'react'
import './landing.css'
import { IoCarSportSharp } from "react-icons/io5";
import { FaLocationPinLock } from "react-icons/fa6";


import { FaLock } from "react-icons/fa";


export const Service = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [yearsExp, setYearsExp] = useState(0);
    const [qualifiedExperts, setQualifiedExperts] = useState(0);
    const [clientsPerYear, setClientsPerYear] = useState(0);
    const [internationalBranches, setInternationalBranches] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
    
            // Example logic to increment values based on scroll position
            if (position >= 600 && yearsExp < 15) {
                // Increment yearsExp gradually up to 15
                let count = 0;
                const interval = setInterval(() => {
                    setYearsExp(prev => Math.min(prev + 1, 15));
                    count++;
                    if (count >= 15 || yearsExp >= 15) {
                        clearInterval(interval);
                    }
                }, 100);
            }
            if (position >= 600 && qualifiedExperts < 36) {
                // Increment qualifiedExperts gradually up to 36
                let count = 0;
                const interval = setInterval(() => {
                    setQualifiedExperts(prev => Math.min(prev + 1, 36));
                    count++;
                    if (count >= 36 || qualifiedExperts >= 36) {
                        clearInterval(interval);
                    }
                }, 50);
            }
            if (position >= 600 && clientsPerYear < 120) {
                // Increment clientsPerYear gradually up to 120
                let count = 0;
                const interval = setInterval(() => {
                    setClientsPerYear(prev => Math.min(prev + 1, 120));
                    count++;
                    if (count >= 120 || clientsPerYear >= 120) {
                        clearInterval(interval);
                    }
                }, 50);
            }
            if (position >= 600 && internationalBranches < 9) {
                // Increment internationalBranches gradually up to 9
                let count = 0;
                const interval = setInterval(() => {
                    setInternationalBranches(prev => Math.min(prev + 1, 9));
                    count++;
                    if (count >= 9 || internationalBranches >= 9) {
                        clearInterval(interval);
                    }
                }, 100);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [yearsExp, qualifiedExperts, clientsPerYear, internationalBranches]);
    
  return (
    <div>

<div className='bg1 h-[50vh]'>
    <div className='bg-blue-300/25 text-refresh-animation text-white text-center text-[5rem] sm:text-[6rem] kanit-regular pt-12 sm:pt-16   h-[50vh]'>

    Services
    </div>
</div>




    <div className='pt-10   flex flex-wrap gap-2 pl-[5%] justify-center items-center  ' >

<div class="max-w-sm hover:bg-green-500 hover:border-0 hover:text-white p-6 border-2 border-dotted ">
    
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-wallet2 m-auto  " viewBox="0 0 16 16">
  <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
</svg>


    <a href="#">
        <h5 class="mb-2 text-3xl font-semibold tracking-tight text-center dark:text-white">Save Money</h5>
    </a>
    <p class="mb-3 font-normal dark:text-gray-400">Save up to 70% on our site compared to the cost of on-airport parking.</p>


</div>

    <div >

<div class="max-w-sm hover:bg-green-500 hover:border-0 hover:text-white p-6 border-2 border-dotted">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-clock-fill m-auto " viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
</svg>
    <a href="#">
        <h5 class="mb-2 text-3xl font-semibold tracking-tight text-center dark:text-white">Save Time</h5>
    </a>
    <p class="mb-3 font-normal  dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
    
</div>
</div>
    <div >

<div class="max-w-sm hover:bg-green-500 hover:border-0 hover:text-white p-6 border-2 border-dotted">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-emoji-heart-eyes m-auto" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.5 4.5 0 0 1 7.965 13a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242s1.46-.118 2.152-.242a27 27 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434m6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434"/>
</svg>
    <a href="#">
        <h5 class="mb-2 text-3xl font-semibold tracking-tight  text-center ">Stress Free</h5>
    </a>
    <p class="mb-3 font-normal  ">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
 
</div>
</div>
</div>

{/* services2nd */}

<div className='bg-gray-200'>

    <h1 className='text-center mt-10 text-[2.5rem] pt-4 tracking-wide kanit-regular'>Give your Dream Car <br /> On Safe Hands     </h1>
<div class="flex flex-wrap justify-center mt-7">

<div class="p-4 max-w-sm">
    <div class="flex rounded-lg h-full dark:bg-gray-800 text-white hover:bg-white hover:text-black bg-gray-400 p-8 flex-col">
        <div class="flex items-center mb-3">
            <div
                class="w-14 h-14     mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <IoCarSportSharp />

            </div>
            <h2 class=" dark: text-[1.5rem] font-medium">Car Wash</h2>
        </div>
        <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base  dark:text-gray-300">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
            </p>
          
        </div>
    </div>
</div>

<div class="p-4 max-w-sm">
    <div class="flex rounded-lg h-full dark:bg-gray-800 text-white bg-gray-400 hover:bg-white hover:text-black p-8 flex-col">
        <div class="flex items-center mb-3">
            <div
                class="w-14 h-14 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 flex-shrink-0">
               <FaLocationPinLock />
            </div>
            <h2 class=" text-[1.5rem] font-medium">Close and handy</h2>
        </div>
        <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base  dark:text-gray-300">
                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
            </p>
          
        </div>
    </div>
</div>

<div class="p-4 max-w-sm">
    <div class="flex rounded-lg h-full dark:bg-gray-800 text-white hover:bg-white hover:text-black bg-gray-400 p-8 flex-col">
        <div class="flex items-center mb-3">
            <div
                class="w-14 h-14     mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <FaLock />
            </div>
            <h2 class=" d text-[1.5rem] font-medium">Safe And Secure</h2>
        </div>
        <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base  dark:text-gray-300">
                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
            </p>
          
        </div>
    </div>
</div>

</div>

</div>
{/* numbers */}
<div className='bg-green-600 text-white mt-16'>
    <h2 className='text-center text-white marko-one-regular pt-4  text-[3rem]'>We Are Good at Numbers</h2>
    <div className='flex flex-wrap  items-center justify-around'>
        
    <div>
            <h1 className='text-center dangrek-regular text-[7rem]'>{yearsExp}</h1>
            <p className='text-center text[1.5rem] font-medium'>Years of experience</p>
            
    </div>
    
    <div>
        <h1 className='text-center dangrek-regular text-[7rem]'>{qualifiedExperts}</h1>
        <p className='text[1.5rem] font-medium'>Qualified experts</p>
    </div>
    
    <div>
        <h1 className='text-center dangrek-regular text-[7rem]'>{clientsPerYear}</h1>
        <p className='text-center text[1.5rem] font-medium'>Clients every year</p>
    </div>
    
    <div>
        <h1 className='text-center dangrek-regular text-[7rem]'>{internationalBranches}</h1>
        <p className='text[1.5rem] font-medium'>International Branch</p>
    </div>
    

    </div>
</div>

</div>
  )
}
