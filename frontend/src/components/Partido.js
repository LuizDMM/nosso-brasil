import axios from 'axios'
import DeputadoCard from './DeputadoCard'
import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import { useParams } from 'react-router-dom'

export default function Partido() {
  let params = useParams()
  const [state, setState] = React.useState([])

  React.useEffect(() => {
    axios
      .get(`/api/partidos/?api_id=${params.id}`)
      .then((res) => setState(res.data))
      .catch((err) => console.log(err))
  }, [])

  document.title = `${state.map((partido) => partido.nome)} - Nosso Brasil`

  function renderMembros() {
    return state[0].membros.length > 0 ? (
      state[0].membros.map((dep) => <DeputadoCard deputado={dep} />)
    ) : (
      <Card className="text-center h-100 mt-3 mb-3">
        <CardBody>
          <CardTitle tag="h5">
            <strong>Nenhum deputado do partido na Câmara.</strong>
          </CardTitle>
        </CardBody>
      </Card>
    )
  }

  return (
    <div className="container">
      {state.map((partido) => (
        <div className="page">
          <div className="row">
            <div className="col">
              <img src={partido.logo} alt={`${partido.nome}`} />
            </div>
            <div className="col">
              <h1>{partido.sigla}</h1>
              <h2>{partido.nome}</h2>
              <p>Líder na Câmara: {partido.lider}</p>
            </div>
          </div>
          <hr />
          <div className="row text-center">
            <h2>Deputados Integrantes na Câmara:</h2>
            {renderMembros()}
          </div>
        </div>
      ))}
    </div>
  )
}
