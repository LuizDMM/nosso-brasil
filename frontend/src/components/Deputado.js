import axios from 'axios'
import DeputadoData from './DeputadoData'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'

export default function Deputado() {
  let params = useParams()
  const [state, setState] = React.useState([])

  React.useEffect(() => {
    axios
      .get(`/api/deputados/?api_id=${params.id}`)
      .then((res) => setState(res.data))
      .catch((err) => console.log(err))
  }, [])

  document.title = `${state.map((dep) => dep.nome)} - Nosso Brasil`

  return (
    <div className="container">
      {state.map((deputado) => (
        <div className="page">
          <div className="row">
            <div className="col">
              <img src={deputado.foto} alt={`${deputado.nome}`} />
            </div>
            <div className="col">
              <h1>{deputado.nome}</h1>
              <h2>
                {deputado.partido} - {deputado.sigla_uf}
              </h2>
            </div>
          </div>
          <Nav tabs className="mt-5">
            <NavItem>
              <NavLink
                className="active"
              >
                Dados Completos
              </NavLink>
            </NavItem>    
          </Nav>
          <div className="content"><DeputadoData deputado={state[0]} /></div>
        </div>
      ))}
    </div>
  )
}
