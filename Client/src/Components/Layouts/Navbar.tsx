import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {Link} from 'react-router-dom'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import logoNav from '../../assets/merkob.png'

const Navbar = () => {
  const [nav, setNav] = useState <boolean>(false);
  const [logo, setLogo] = useState<boolean>(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div className='w-[110px]'>
        <img src={logoNav} alt="merkob.ma" />
      </div>
      <ul className='hidden md:flex'>
        <Link to='/register'>Home</Link>
        <Link to='/register'>Destinations</Link>
        <Link to='/register'>Travel</Link>
        <Link to='/register'>View</Link>
        <Link to='/register'>Book</Link>
      </ul>
      <div className='hidden md:flex'>
        <BiSearch className='' size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>BEACHES.</h1>
          <Link to='/register' className='border-b'>Home</Link >
          <Link to='/register' className='border-b'>Destinations</Link >
          <Link to='/register' className='border-b'>Travel</Link >
          <Link to='/register' className='border-b'>View</Link >
          <Link to='/register' className='border-b'>Book</Link >
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;