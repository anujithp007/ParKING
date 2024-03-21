import React from 'react'
import img1 from '../image/a.avif'
import a from '../image/A.jpg'
import b from '../image/B.jpg'
import c from '../image/c.jpg'
import d from '../image/d.jpg'
import e from '../image/e.jpg'
import f from '../image/f.jpg'
import { Carousel } from "@material-tailwind/react";
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';



import { Pagination,Autoplay } from 'swiper/modules';
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div>
        <div className='bg2 h-[50vh]'>
    <div className='  text-refresh-animation text-white text-center text-[5rem] sm:text-[6rem] kanit-regular pt-12 sm:pt-16   h-[50vh]'>

    About
    </div>
</div>


    <h1 className='text-center text-[3rem] pt-4 marko-one-regular'>Ab<span className='border-b-4 border-green-400'>out</span> us</h1>
    
<div className=" sm:flex  sm:justify-center sm:items-center ">
    <div className='m-5' >
      <img className=' ' src={img1} alt="" />
    </div>
    <div className='' >
      <h2 className='text-center kanit-regular text-[2rem]'>Best In The West</h2>
      <p className='m-12 text-center border bg-gray-100 font-serif rounded-md hover:bg-gray-700 hover:text-white mt-2 pt-[4.5rem]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Amet saepe expedita numquam! Ipsum, recusandae explicabo! Voluptatibus <br /> cumque voluptates, ad fuga quam alias expedita. Necessitatibus voluptatum quaerat accusantium sunt quos expedita?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, <br /> cumque. Ducimus natus amet, hic modi voluptas corrupti porro accusamus, asperiores eligendi sit alias dolor aperiam voluptatem. Voluptas repellendus nobis sit?
      </p>
    </div>
</div>



<div className='bg3 p-5'>
<h1 className='text-center text-white text-[2rem] kanit-regular'>What Ou<span className='border-b-4 border-b-green-500'>r Cl</span>ients Says</h1>

<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper flex flex-wrap mt-8"
      >
        <SwiperSlide >

<div class="w-full max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-quote mt-3 m-auto  text-green-500" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
</svg>
        <p  className='text-center mt-9'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officiis et sint dolore. Autem temporibus maiores repellendus voluptatum dolor voluptatibus culpa ratione repellat nulla porro ad, ea non commodi eligendi.</p>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={a} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide><div class="w-full max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-quote mt-3 m-auto  text-green-500" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
</svg>
        <p  className='text-center mt-9'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officiis et sint dolore. Autem temporibus maiores repellendus voluptatum dolor voluptatibus culpa ratione repellat nulla porro ad, ea non commodi eligendi.</p>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={b} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Ellys Perry</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Manager </span>
       
    </div>
</div></SwiperSlide>
        <SwiperSlide><div class="w-full max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-quote mt-3 m-auto  text-green-500" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
</svg>
        <p  className='text-center mt-9'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officiis et sint dolore. Autem temporibus maiores repellendus voluptatum dolor voluptatibus culpa ratione repellat nulla porro ad, ea non commodi eligendi.</p>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={c} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Don Coleman</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Executive producer </span>
       
    </div>
</div></SwiperSlide>
        <SwiperSlide><div class="w-full max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-quote mt-3 m-auto  text-green-500" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
</svg>
        <p  className='text-center mt-9'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officiis et sint dolore. Autem temporibus maiores repellendus voluptatum dolor voluptatibus culpa ratione repellat nulla porro ad, ea non commodi eligendi.</p>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={d} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Katty perry</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Music Cordinator</span>
       
    </div>
</div></SwiperSlide>
        <SwiperSlide><div class="w-full max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-quote mt-3 m-auto  text-green-500" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
</svg>
        <p  className='text-center mt-9'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officiis et sint dolore. Autem temporibus maiores repellendus voluptatum dolor voluptatibus culpa ratione repellat nulla porro ad, ea non commodi eligendi.</p>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={e} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Catherine Thresa</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Costume Designer</span>
       
    </div>
</div></SwiperSlide>
        <SwiperSlide><div class="w-full max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-quote mt-3 m-auto  text-green-500" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
</svg>
        <p  className='text-center mt-9'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officiis et sint dolore. Autem temporibus maiores repellendus voluptatum dolor voluptatibus culpa ratione repellat nulla porro ad, ea non commodi eligendi.</p>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={f} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Akash mithra</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Football Manager</span>
       
    </div>
</div>
</SwiperSlide>
        
      </Swiper>
    
        </div>

        <Footer/>
    </div>
  )
}

export default About