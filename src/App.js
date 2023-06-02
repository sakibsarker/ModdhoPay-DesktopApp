import SideBar from './components/SideBar'
import Setting from './pages/Setting'
import Dashborad from './pages/Dashboard'
import Money from './pages/Money'
import Request from './pages/Request'
import Courier from './pages/Courier'
import Delivery from './pages/Delivery'
import Pending from './pages/Pending'
import Customer from './pages/Customer'
import { HashRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import React from 'react'
function App() {

  return (
    <HashRouter>
     <SideBar>
    <Routes>
      <Route path='/' element={<Dashborad/>}/>
      <Route path='/request' element={<Request/>}/>
      <Route path='/delivery' element={<Delivery/>}/>
      <Route path='/pending' element={<Pending/>}/>
      <Route path='/money' element={<Money/>}/>
      <Route path='/courier' element={<Courier/>}/>
      <Route path='/setting' element={<Setting/>}/>
      <Route path='/customer' element={<Customer/>}/>
      </Routes>
      </SideBar>
      </HashRouter>
 
  
  )
}

export default App
