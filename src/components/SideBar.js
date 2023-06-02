import React, { useState } from 'react'
import {FaBars,FaRegChartBar} from 'react-icons/fa'
import {AiTwotoneSetting,AiFillPauseCircle } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { GrMoney } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { MdGroupAdd } from "react-icons/md";
import { MdOutlinePersonSearch } from "react-icons/md";
import { NavLink } from 'react-router-dom'
const SideBar = ({children}) => {
    const[isOpen,setIsopen]=useState(true)
    const toggle=()=>setIsopen(!isOpen)
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaRegChartBar/>
        },
        {
            path:"/request",
            name:"Request",
            icon:<MdGroupAdd/>
        },
        {
            path:"/pending",
            name:"Pending",
            icon:<AiFillPauseCircle/>
        } ,
        {
            path:"/delivery",
            name:"Delivery",
            icon:<BiPaperPlane/>
        },

        {
            path:"/money",
            name:"Money",
            icon:<GrMoney/>
        },
        {
            path:"/courier",
            name:"Courier",
            icon:<TbTruckDelivery/>
        },
        {
            path:"/customer",
            name:"Customer",
            icon:<MdOutlinePersonSearch/>
        },
        {
            path:"/setting",
            name:"Settings",
            icon:<AiTwotoneSetting/>
            
        }
    ]
  return (
    <div className="container">
        <div  style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>

                <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                    <FaBars style={{color:'#FDA058'}} onClick={toggle}/>
                </div>
            </div>
            {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassname="active">
                            <div className="icon">
                                {item.icon}
                            </div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">
                                {item.name}
                            </div>
                        </NavLink>
                    ))
                }
        </div>
        <main>{children}</main>
    </div>
  )
}

export default SideBar