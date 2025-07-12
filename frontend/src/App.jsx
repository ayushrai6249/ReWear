import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Home from './pages/Home';


function App() {

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
