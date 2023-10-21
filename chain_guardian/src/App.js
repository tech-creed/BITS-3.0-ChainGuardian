import React from 'react'
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'


//pages
import LandingPage from './pages/LandingPage'
import Signup from './pages/signup'
import Login from './pages/signin'


//context provider
import { useAuthContext } from './hooks/useAuthContext';


function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
        <Route
              path='/'
              element={user ? <Signup/> : <Navigate to='/landing'/>}
            />
          <Route path='/landing' element={<LandingPage />}/>
          <Route
              path='/signup'
              element={!user ? <Signup/> : <Navigate to='/'/>}
            />
            <Route
              path='/login'
              element={!user ? <Login/> : <Navigate to='/'/>}
            />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
