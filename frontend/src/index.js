import './custom.scss'
import App from './App'
import Deputado from './components/Deputado'
import DeputadoData from './components/DeputadoData'
import Deputados from './components/Deputados'
import DeputadosIndex from './components/DeputadosIndex'
import DespesasDeputado from './components/DespesasDeputado'
import HomePage from './components/HomePage'
import Partido from './components/Partido'
import Partidos from './components/Partidos'
import PartidosIndex from './components/PartidosIndex'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/deputados" element={<DeputadosIndex />}>
            <Route index element={<Deputados />} />
            <Route path="/deputados/:id" element={<Deputado />}>
              <Route index element={<DeputadoData />} />
              <Route path="/deputados/:id/despesas" element={<DespesasDeputado />} />
            </Route>
          </Route>
          <Route path="/deputados/:id" element={<Deputados />} />
          <Route path="/partidos" element={<PartidosIndex />}>
            <Route index element={<Partidos />} />
            <Route path="/partidos/:id" element={<Partido />} />
          </Route>
        </Route>
      </Routes>
    </React.StrictMode>
  </Router>,

  document.getElementById('root')
)
