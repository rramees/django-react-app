import React from 'react'
import { BrowserRouter, Routes, Route ,Navigate } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

function App() {

  const Logout = () => {
    localStorage.clear()
    return <Navigate to="/login" />
  }

  const RegisterAndLogout = () => {
    localStorage.clear()
    return <Register />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
          <Home />
          </ProtectedRoute>
          } />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
