import axios from 'axios'
import React from 'react'
import { Table } from 'reactstrap'

class Deputados extends React.Component {
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
      <tr key={dep.api_id}>
        <td>{dep.api_id}</td>
        <td>{dep.nome}</td>
        <td>{dep.partido}</td>
        <td>{dep.sigla_uf}</td>
      </tr>
    ))
  }

  render() {
    document.title = 'Deputados - Nosso Brasil'

    return (
      <div className="Deputados">
        <div className="container">
          <Table hover responsive striped>
            <thead>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Partido</th>
              <th scope="col">Estado</th>
            </thead>
            <tbody>{this.renderDeputados()}</tbody>
          </Table>
        </div>
      </div>
    )
  }
}

export default Deputados
