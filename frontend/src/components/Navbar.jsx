import React, { useState,useEffect} from 'react'
import { NavLink, useNavigate ,useLocation} from 'react-router-dom'
import { assets } from '../assets/assets';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [token, setToken] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(!!storedToken); 
  }, [location]); 

  const logout = () => {
    localStorage.clear();
    setToken(false);
    navigate('/login');
  };
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-grey-400'>
      <h1 onClick={() => { navigate('/') }} className='cursor-pointer text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500'>ReWear</h1>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/cloths'>
          <li className='py-1'>CLOTHS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/swap-requests'>
          <li className='py-1'>SWAP REQUESTS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token
            ? <div className='flex items-center cursor-pointer gap-2 group relative'>
              <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => { navigate('/my-profile') }} className='hover:text-black cursor-poiner'>Profile</p>
                  <p onClick={() => { navigate('/my-cloths') }} className='hover:text-black cursor-poiner'>My Cloths</p>
                  <p onClick={() => { navigate('/add-cloth') }} className='hover:text-black cursor-poiner'>List Item</p>
                  <p onClick={() => logout()} className='hover:text-black cursor-poiner'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => { navigate('/login') }} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all `}>
          <div className='flex items-center justify-between px-5 py-6'>
            <h1 className='cursor-pointer text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500'>ReWear</h1>
            <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-3 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/cloths'><p className='px-4 py-2 rounded inline-block'>CLOTHS</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/swap-requests'><p className='px-4 py-2 rounded inline-block'>SWAP REQUESTS</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
