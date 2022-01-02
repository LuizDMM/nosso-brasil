import axios from 'axios'
import DeputadoCard from './DeputadoCard'
import React from 'react'

export default class Deputados extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deputados: [],
    }
  }

  componentDidMount() {
    this.refreshDeputados()
  }

  refreshDeputados() {
    axios
      .get('/api/deputados/')
      .then((res) => this.setState({ deputados: res.data }))
      .catch((err) => console.log(err))
  }

  renderDeputados() {
    return this.state.deputados.map((dep) => (
      <DeputadoCard deputado={dep} />
    ))
  }

  render() {
    document.title = 'Deputados - Nosso Brasil'

    return (
        <div className="container">
          <h1 className="text-center">Deputados</h1>
          <div className="row g-2 ">{this.renderDeputados()}</div>
        </div>
    )
  }
}
