import SideBar from './components/SideBar'
import Setting from './pages/Setting'
import Dashborad from './pages/Dashboard'
import ProductsList from './pages/ProductList'
import Products from './pages/Products'
import Order from './pages/Order'
import QRcode from './pages/QRcode'
import Table from './pages/Table'
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
      <Route path='/productlist' element={<ProductsList/>}/>
      <Route path='/product' element={<Products/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/table' element={<Table/>}/>
      <Route path='/qrcode' element={<QRcode/>}/>
      <Route path='/setting' element={<Setting/>}/>
      <Route path='/customer' element={<Customer/>}/>
      
      
      </Routes>
      </SideBar>
      </HashRouter>
 
  
  )
}

export default App
