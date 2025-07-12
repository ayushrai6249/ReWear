import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Home from './pages/Home';
import Navbar from './components/Navbar'


function App() {

  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
