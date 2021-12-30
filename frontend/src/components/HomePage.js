import Hero from './Hero'

function HomePage() {
  document.title = 'Home - Nosso Brasil'
  return (
    <div className="HomePage">
      <div className="container">
        <Hero />
      </div>
    </div>
  )
}

export default HomePage