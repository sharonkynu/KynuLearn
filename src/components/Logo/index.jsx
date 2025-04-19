import React from 'react'
import "./Logo.css"
import { FaBookOpenReader } from 'react-icons/fa6'

const Logo = () => {
  return (
    <div className='logo_container'>
        <FaBookOpenReader className='icon'/>
        <h1 className="name">Kynu<span className='color_primary'>Learn</span></h1>

    </div>
  )
}

export default Logo