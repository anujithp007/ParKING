import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navi from './Components/Navi'
import Landing from './Pages/Landing'
import { Service } from './Pages/Service'
import About from './Pages/About'
import Contact, { Contact1 } from './Pages/Contact1'
import Reg from './Components/Reg'
import Login from './Components/Login'
import AdminLanding from './Pages/adminpage/AdminLanding'
import AdminNav from './Pages/adminpage/AdminNav'
import ParkingProvider from './Pages/adminpage/Userpage'
import PPnav from './Pages/parkingprovider/PPnav'
import PPlanding from './Pages/parkingprovider/PPlanding'
import Userpage from './Pages/adminpage/Userpage'
import AddSpace from './Pages/parkingprovider/AddSpace'
import AddSpot from './Pages/parkingprovider/AddSpot'


export const App = () => {
  return (
    <div>
<React.StrictMode>
  <BrowserRouter>
<Routes>

<Route path='/' element={<Navi/>}>

<Route  index element={<Landing/>}></Route>
<Route path='/service' element={<Service/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/contact' element={<Contact1/>}></Route>

</Route>
<Route path='/register' element={<Reg/>}></Route>
<Route path='/login' element={<Login/>}></Route>
{/* <Route path='/user' element={} */}

<Route path='/admin' element={<AdminNav/>}>
    <Route index element={<AdminLanding/>}></Route>
    <Route path='userpage' element={<Userpage/>}></Route>
</Route>

<Route path='/pp' element={<PPnav/>}>
    <Route index element={<PPlanding/>}></Route>
    <Route path='addspace' element={<AddSpace/>}></Route>
    <Route path='addspot/:id' element={<AddSpot/>}></Route>

</Route>

</Routes>
  </BrowserRouter>
  </React.StrictMode>
    </div>
  )
}

