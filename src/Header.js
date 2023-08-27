import React from 'react'
import './Header.css'
import Searchicon from '@mui/icons-material/Search'
import Globeicon from '@mui/icons-material/Language'
import { Avatar } from '@mui/material'
import Arrow from '@mui/icons-material/ExpandMore'
import { Link } from 'react-router-dom'
 
function Header() {
  return (
    <div className='header'>
      <Link to="/">
      <img 
        className="header_icon"
        src = "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
        alt = ""
        />
      </Link>
            <div className=" header_centre">
        
                <input type = "text" />
                <Searchicon />

            </div>

            <div className='header_right'>
                <p> Become a host </p>
                <Globeicon />
                <Arrow/>
                <Avatar />
            </div>
    </div>


  )
}

export default Header