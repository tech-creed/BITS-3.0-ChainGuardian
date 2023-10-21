import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'


//pages
import LandingPage from './pages/LandingPage'
import Signup from './pages/signup'
import Login from './pages/signin'
import AddressPage from './pages/address'
import Dashboard from './pages/dashboard'
import Transaction from './pages/transaction'
import Tree from './pages/tree'


//context provider
import { useAuthContext } from './hooks/useAuthContext';



function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={user ? <Dashboard/> :<Navigate to='/landing' />}/>
          <Route path='/landing' element={<LandingPage/>}/>
          <Route path='/address' element={user? <AddressPage/> :<Navigate to='/landing' />}/>
          <Route path='/transaction' element={user ?<Transaction/>:<Navigate to='/landing' />}/>

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
          <Route path='/tree' element={<Tree/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
