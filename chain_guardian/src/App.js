import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

//pages
import LandingPage from './pages/LandingPage'
import Signup from './pages/signup'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/auth/signup' element={<Signup />}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
