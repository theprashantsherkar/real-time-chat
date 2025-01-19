// import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import Profile from './pages/profile/Profile';
import Chat from './pages/chat/Chat';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/chat' element={<Chat />} />

        <Route path='*' element={<Navigate to={'/auth'} />} />
      </Routes>
    </Router>
  );
};

export default App;