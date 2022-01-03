import axios from 'axios'
import DeputadoData from './DeputadoData'
import DespesasDeputado from './DespesasDeputado'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'

export default function Deputado() {
  let params = useParams()
  let tab = 'dados'
  const [state, setState] = React.useState([])

  React.useEffect(() => {
    axios
      .get(`/api/deputados/?api_id=${params.id}`)
      .then((res) => setState(res.data))
      .catch((err) => console.log(err))
  }, [])

  document.title = `${state.map((dep) => dep.nome)} - Nosso Brasil`

  function handleTabChange() {
    if (tab == 'dados') {
      tab = 'despesas'
    } else if (tab == 'despesas') {
      tab = 'dados'
    }
  }

  function handleTab() {
    if (tab == 'dados') {
      return <DeputadoData deputado={state[0]} />
    } else if (tab == 'despesas') {
      return <DespesasDeputado deputado={state[0]} />
    }
  }

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
          <Nav tabs>
            <NavItem>
              <NavLink
                className={tab == 'dados' ? 'active' : ''}
                onClick={() => {
                  handleTabChange()
                }}
              >
                Dados Completos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={tab == 'despesas' ? 'active' : ''}
                onClick={() => {
                  handleTabChange()
                }}
              >
                Despesas
              </NavLink>
            </NavItem>
          </Nav>
          <div className="content">{handleTab()}</div>
        </div>
      ))}
    </div>
  )
}
