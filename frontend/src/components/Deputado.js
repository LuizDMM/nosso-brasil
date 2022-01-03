import axios from 'axios'
import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
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
          <Nav tabs>
            <NavItem>
              <NavLink className="active" tag={Link} to={`/deputados/${params.id}`}>Dados Completos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={`/deputados/${params.id}/despesas`} tag={Link}>Despesas</NavLink>
            </NavItem>
          </Nav>
          <div><Outlet /></div>
        </div>
      ))}
    </div>
  )
}
