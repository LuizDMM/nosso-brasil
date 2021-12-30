import AppNavbar from './components/AppNavbar.js'
import Hero from './components/Hero.js'
import Footer from './components/Footer.js'

function App() {
  let page = 'Home'
  document.title = `Nosso Brasil - ${page}`
  return (
    <div className="App">
      <AppNavbar />
      <div className="container">
        <Hero />
      </div>
      <Footer />
    </div>
  )
}

export default App
