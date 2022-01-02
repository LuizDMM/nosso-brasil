import AppNavbar from './components/AppNavbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
