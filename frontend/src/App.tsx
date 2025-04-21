// import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login, Register } from './pages/auth/Auth';
import Profile from './pages/profile/Profile';
import Chat from './pages/chat/Chat';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/profile' element={<Profile />} />
        <Route path='/chat' element={<Chat />} />


      </Routes>
    </Router>
  );
};

export default App;