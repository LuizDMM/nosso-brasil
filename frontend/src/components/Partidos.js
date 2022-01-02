import axios from 'axios'
import PartidoCard from './PartidoCard'
import React from 'react'

class Partidos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      partidos: [],
    }
  }

  componentDidMount() {
    this.refreshPartidos()
  }

  refreshPartidos() {
    axios
      .get('/api/partidos/')
      .then((res) => this.setState({ partidos: res.data }))
      .catch((err) => console.log(err))
  }

  renderPartidos() {
    return this.state.partidos.map((partido) => (
      <PartidoCard partido={partido} />
    ))
  }

  render() {
    document.title = 'Partidos - Nosso Brasil'

    return (
      <div className="container ">
        <h1 className="text-center">Partidos</h1>
        <div className="row g-2">{this.renderPartidos()}</div>
      </div>
    )
  }
}

export default Partidos
