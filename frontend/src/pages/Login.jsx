import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/AppContext';


const Login = () => {
  const [token, setToken] = useState(false);
  const navigate = useNavigate();
  const [state, setState] = useState('sign up');
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === "sign up") {
        const { data } = await axios.post('http://localhost:9000/api/users', { name, email, password });
        if (data && data._id) {
          toast.success('Account created! Please login.');
          setState('login');
        } else {
          toast.error('Sign up failed');
        }
      } else {
      const { data } = await axios.post('http://localhost:9000/api/auth/login', { email, password });
if (data && data.token && data.user) {
  localStorage.setItem('token', data.token);
  localStorage.setItem('user', JSON.stringify(data.user));
  setToken(data.token);
  setUser(data.user); 
  toast.success('Login successful!');
        } else {
          toast.error('Login failed');
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.error || error.message);
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'sign up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'sign up' ? "sign up" : "log in"} to book appointment</p>
        {state === "sign up" &&
          <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} required />
          </div>
        }
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
        </div>
        <button type='submit' className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'sign up' ? "Create Account" : "log in"}</button>
        {
          state === "sign up"
            ? <p>Already have an account? <span onClick={() => setState('login')} className='text-primary underline cursor-pointer'>Login here</span></p>
            : <p>Create an new account? <span onClick={() => setState('sign up')} className='text-primary underline cursor-pointer'> Click here</span></p>
        }
      </div>

    </form>
  )
}

export default Login
