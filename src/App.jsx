import Sidebar from './Navbar/Sidebar';
import Login from './Authentificatiion/Login';
import useUser from './context/userContext';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Notfound from './pages/Notfound';

const App = () => {
  const { user } = useUser()

  if (!user) return <Login />

  return (
    <div className='min-h-screen bg-[var(--bg)] text-white flex'>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App
