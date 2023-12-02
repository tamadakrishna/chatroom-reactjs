import React, { useState } from 'react'
import ChatUI from './chatUI';
import ModalComponent from './ModalComponent';


function App() {

  const [username, setUsername] = useState('');

  const User = (name)=>{
    setUsername(name)
  }
  
  return (
  <>
  <ModalComponent User={User}/>
  {username ? <ChatUI username={username} />:''}
  </>
  )
}

export default App