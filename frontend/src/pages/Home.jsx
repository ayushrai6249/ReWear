import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/AppContext';
const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <div className='text-primary'>
      This is home page
       {user ? `Welcome, ${user.name} ggg` : 'Not logged in'}
    </div>
  )
}

export default Home
