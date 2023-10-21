import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'


//pages
import LandingPage from './pages/LandingPage'
import Signup from './pages/signup'
import Login from './pages/signin'
import AddressPage from './pages/address'

//context provider
import { useAuthContext } from './hooks/useAuthContext';
import Dashboard from './pages/dashboard'


function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/address' element={<AddressPage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          
          <Route path='/landing' element={<LandingPage/>}/>
          <Route
            path='/'
            element={user ? <Navigate to='/dashboard' /> :<LandingPage /> }
          />
          <Route
            path='/signup'
            element={!user ? <Signup /> : <Navigate to='/' />}
          />
          <Route
            path='/login'
            element={!user ? <Login /> : <Navigate to='/' />}
          />
        <Route
            path='/login'
            element={!user ? <Login /> : <Navigate to='/' />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
