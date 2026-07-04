import Sidebar from './Navbar/Sidebar';
import Login from './Authentificatiion/Login';
import useUser from './context/userContext';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Notfound from './components/Notfound';

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
