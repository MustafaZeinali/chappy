import { useState } from 'react'
import Header from '../frontend/components/Header.jsx'
import CanalChat from '../frontend/components/CanalChat.jsx'
import './App.css'
import Login from '../frontend/components/Login.jsx'
function App() {
  

  return (
    <div>
      <Header />
      <CanalChat/>
      <Login />
    </div>
      
  )
}

export default App
