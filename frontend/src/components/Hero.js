import hero_img from '../hero_img.svg'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="Hero">
      <div className="row align-items-center">
        <div className="col">
          <h1 className="display-1">Conheça os seus representantes</h1>
          <p>
            Tenha em tempo real as informações de todos os deputados do Brasil.
          </p>
          <Button color="primary" size="lg" className="text-white" tag={Link} to="/deputados">
            Comece aqui
          </Button>
        </div>
        <div className="col">
          <img src={hero_img} alt="Conheça seus representantes" />
        </div>
      </div>
    </section>
  )
}

export default Hero
