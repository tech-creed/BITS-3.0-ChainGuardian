import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

//pages
import LandingPage from './pages/LandingPage'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
