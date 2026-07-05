import Sidebar from './Navbar/Sidebar';
import Login from './Authentificatiion/Login';
import useUser from './context/userContext';
import Home from './pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Notfound from './pages/Notfound';
import Profile from './pages/Profile';
import Setting from './pages/Setting';
import ProtectedRoute from './components/ProtectedRoute';

// Routes where the Sidebar should NOT appear
const NO_SIDEBAR_PATHS = ['/login'];

// All valid app routes — anything not in this list is a 404
const KNOWN_PATHS = ['/', '/about', '/dashboard', '/login', '/profile', '/settings'];

const App = () => {
  const { pathname } = useLocation();

  const is404 = !KNOWN_PATHS.includes(pathname);
  const showSidebar = !NO_SIDEBAR_PATHS.includes(pathname) && !is404;

  return (
    <div className='min-h-screen bg-[var(--bg)] text-white flex'>
      {showSidebar && <Sidebar />}
      <div className='flex-1'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Setting />
            </ProtectedRoute>
          }
        />
      </Routes>
      </div>
    </div>
  )
}

export default App
