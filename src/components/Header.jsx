import React from 'react'
import { Link } from "react-router-dom";
import { useOnlineStatus } from '../../useOnlineStatus';
import { About } from './About';
import { useSelector } from 'react-redux';
import { HEADER_LOGO } from '../utils/constants';

export const Header = () => {

  const onlineStatus = useOnlineStatus() // Online status Custom Hook

  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)

  return (
    <div className='flex bg-pink-200 justify-between shadow-xl w-full'>
        <img className='w-20' src={HEADER_LOGO} alt='asd'></img>
        <ul className='flex items-center'>
            <li className='px-5'>Online Status {onlineStatus ? '🟢' : '🔴'}</li>
            <Link to = '/'><li className='px-5'>Home</li></Link>
            <Link to = '/cart'><li className='px-5 font-bold'>🛒 Cart : ({cartItems.length} items)</li></Link>
            <Link to = '/about'><li className='px-5'>About</li></Link>
            <Link to = '/contact'><li className='px-5'>Contact</li></Link>
        </ul>
    </div>
  )
}
