import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navi from './Components/Navi'
import Landing from './Pages/Landing'
import { Service } from './Pages/Service'
import About from './Pages/About'
import Contact, { Contact1 } from './Pages/Contact1'
import Reg from './Components/Reg'


export const App = () => {
  return (
    <div>
<React.StrictMode>
  <BrowserRouter>
<Routes>

<Route path='/' element={<Navi/>}>

<Route path='/home' index element={<Landing/>}></Route>
<Route path='/service' element={<Service/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/contact' element={<Contact1/>}></Route>

</Route>
<Route path='/register' element={<Reg/>}></Route>



</Routes>
  </BrowserRouter>
  </React.StrictMode>
    </div>
  )
}

