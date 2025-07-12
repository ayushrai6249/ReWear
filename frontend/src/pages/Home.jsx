import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/AppContext';
import Header from '../components/Header';
import Catagory from '../components/Catagory';
const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Header />
      <Catagory />
    </div>
  )
}

export default Home
