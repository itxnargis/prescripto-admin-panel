import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from './context/AppContext'

const App = () => {

  const { adminToken } = useContext(AppContext)

  return (
    <div>
      <Login />
      <ToastContainer />
    </div>
  )
}

export default App
