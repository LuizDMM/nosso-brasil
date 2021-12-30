import axios from 'axios'
import React from 'react'
import { Table } from 'reactstrap'

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
      <tr key={partido.api_id}>
        <td>{partido.api_id}</td>
        <td>{partido.sigla}</td>
        <td>{partido.nome}</td>
        <td>{partido.lider}</td>
      </tr>
    ))
  }

  render() {
    document.title = 'Partidos - Nosso Brasil'

    return (
      <div className="Partidos">
        <div className="container">
          <Table hover responsive striped>
            <thead>
              <th scope="col">ID</th>
              <th scope="col">Sigla</th>
              <th scope="col">Nome</th>
              <th scope="col">Líder</th>
            </thead>
            <tbody>{this.renderPartidos()}</tbody>
          </Table>
        </div>
      </div>
    )
  }
}

export default Partidos
