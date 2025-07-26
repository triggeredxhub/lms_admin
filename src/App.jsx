import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Admin from './pages/admin';

function App() {
  const userRole = 'admin'; // Could be 'admin', 'teacher', or 'student'

  return (
    <BrowserRouter>
      <Routes>
        {/* Default route based on role */}
        <Route path="/" element={<Navigate to={`/${userRole}`} replace />} />

        {/* Admin route */}
        <Route
          path="/admin"
          element={userRole === 'admin' ? <Admin /> : <Navigate to="/" />}
        />
        {/* student */}
        <Route
          path="/student"
          element={userRole === 'student' ? <Home /> : <Navigate to="/" />}

        />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
