import AppNavbar from './components/AppNavbar'
import Deputados from './components/Deputados'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import Partidos from './components/Partidos'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <AppNavbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/deputados" element={<Deputados />} />
          <Route path="/partidos" element={<Partidos />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
