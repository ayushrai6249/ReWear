import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Cloths from './pages/Cloths'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import UserDashboard from './Components/UserDashboard';

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cloths" element={<Cloths />} />
        <Route path='/login' element={<Login />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
