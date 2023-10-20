import React from 'react'
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'


//pages
import LandingPage from './pages/LandingPage'
import Signup from './pages/signup'

//context provider
import { useAuthContext } from './hooks/useAuthContext';


function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path='/landing' element={<LandingPage />}/>
          <Route
              path='/signup'
              element={!user ? <Signup/> : <Navigate to='/'/>}
            />
            {/* <Route
              path='/login'
              element={!user ? <Login/> : <Navigate to='/'/>}
            /> */}
            {/* <Route
              path='/'
              element={user ? <Dashboard/> : <Navigate to='/login'/>}
            /> */}

        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
