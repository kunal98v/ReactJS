import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className='flex bg-pink-200 justify-between shadow-xl w-full'>
        <img className='w-20' src='https://img.pikbest.com/png-images/20241111/-22creative-food-logo-collection-for-culinary-brands-22_11079861.png!w700wp' alt='asd'></img>
        <ul className='flex items-center'>
            <Link to = '/'><li className='px-5'>Home</li></Link>
            <Link to = '/about'><li className='px-5'>About</li></Link>
            <Link to = '/contact'><li className='px-5'>Contact</li></Link>
        </ul>
    </div>
  )
}
