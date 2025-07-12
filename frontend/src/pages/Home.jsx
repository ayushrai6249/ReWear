import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/AppContext';
import Header from '../components/Header';
const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Header />
    </div>
  )
}

export default Home
