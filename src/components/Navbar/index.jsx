import React from 'react'
import "./Navbar.css"
import {menus} from "../../data"
import { Link } from 'react-scroll'
import { FaArrowRightLong } from 'react-icons/fa6'
import Logo from '../Logo'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Logo/>
      <div className='column hamburger'>
        <div className='menu_group'>
          {
            menus.map((menu,index)=>(
              <Link
              to={menu.routeId}
              className='item'
              activeClass='text_gradient'
              smooth={true}
              spy={true}
              offset={-70}
              key={index}
              >
                {menu.name}
              </Link>
            ))
          }
        </div>
      </div>
    <div className='column'>
      <Link to='contact' className='btn contact_btn'>Get Started <FaArrowRightLong/></Link>
    </div>
    </nav>
  )
}

export default Navbar 