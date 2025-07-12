import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './context/AppContext';
import Home from './pages/Home';
import Cloths from './pages/Cloths';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Contact from './pages/Contact';
import MyCloths from './pages/MyCloths';
import MyProfile from './pages/MyProfile';
import SwapRequests from './pages/SwapRequests';
import About from './pages/About';
import UserDashboard from './Components/UserDashboard';
import AddCloth from './pages/AddCloth';
import ItemDetail from './components/ItemDetail'; 
import AdminItemModeration from './pages/adminpage';

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <UserProvider>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cloths" element={<Cloths />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-cloths" element={<MyCloths />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/swap-requests" element={<SwapRequests />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/add-cloth" element={<AddCloth />} />
        <Route path="/item" element={<ItemDetail />} />
        <Route path="/admin" element={<AdminItemModeration />} />
      </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
