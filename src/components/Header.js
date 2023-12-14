import React from 'react'
import Logo from "../images/netflix_logo.svg"

const Header = () => {
  return (
    <div className='absolute px-8 py-4 bg-gradient-to-b from-black z-10'>
        <img
            className='w-44'
            src={Logo} 
            alt="logo"
        />
    </div>
  )
}

export default Header