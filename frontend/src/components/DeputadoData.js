import axios from 'axios'
import React from 'react'
import { Table } from 'reactstrap'
import { useParams } from 'react-router-dom'

export default function DeputadoData() {
  let params = useParams()
  const [state, setState] = React.useState([])

  React.useEffect(() => {
    axios
      .get(`/api/deputados/?api_id=${params.id}`)
      .then((res) => setState(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="container">
      {state.map((deputado) => (
        <Table>
          <tbody>
            <tr className="text-center">
              <h3>Dados Pessoais</h3>
            </tr>
            <tr>
              <th>Nome Civil</th>
              <td>{deputado.nome_civil}</td>
            </tr>
            <tr>
              <th>Partido</th>
              <td>
                {deputado.partido} - {deputado.sigla_uf}
              </td>
            </tr>
          </tbody>
        </Table>
      ))}
    </div>
  )
}
