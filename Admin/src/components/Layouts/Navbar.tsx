import React from 'react'
import {useLocation} from 'react-router-dom'

const Navbar = () => {
    const location=useLocation()
  return (
    <>
    {location.pathname!=="/login" && (
        
        <div>Navbar</div>
    )}</>
  )
}

export default Navbar