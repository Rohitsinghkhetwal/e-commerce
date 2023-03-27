import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {useStore} from './Store';



const Navabar = () => {
  const {cart} = useStore()
  return (
    <>
    
    <nav className='bg-gray-300 text-inherit flex flex-row justify-between px-9 font-serif text-xl'>
      <h2 className='text-inherit px-11 text-xl  '>Innocenti</h2>
        
        <ul className='flex px-11 '>
        <li className='mx-2 px-4'>
               
                <div className='flex '>
                <Link to="/cart"><span><AiOutlineShoppingCart/></span></Link>
                <span>{cart.length}</span>
                </div>
            </li >
            
            <li className='px-4'>
                <Link to= "/">Home</Link>
            </li>
            <li className='px-4'>
                <Link to= "/login">Login</Link>
            </li>
            <li className='px-4'>
                <Link to= "/register">Register</Link>
            </li>
           
        </ul>
    </nav>
    </>
  )
}

export default Navabar