import React from 'react'
import { Table } from 'reactstrap'

export default function DeputadoData(props) {
  function formataCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }

  return (
    <div className="container">
      <Table>
        <tbody>
          <tr className="text-center">
            <th colSpan="4">Dados Pessoais</th>
          </tr>
          <tr>
            <th>Nome Civil</th>
            <td colSpan="3">{props.deputado.nome_civil}</td>
          </tr>
          <tr>
            <th>Partido</th>
            <td>
              {props.deputado.partido} - {props.deputado.sigla_uf}
            </td>
            <th>Situação</th>
            <td>{props.deputado.condicao_eleitoral}</td>
          </tr>
          <tr>
            <th>Gênero</th>
            <td>{props.deputado.sexo == 'M' ? 'Masculino' : 'Feminino'}</td>
            <th>CPF</th>
            <td>{formataCPF(props.deputado.cpf)}</td>
          </tr>
          <tr>
            <th>Data de Nascimento</th>
            <td>
              {new Date(props.deputado.data_nascimento).toLocaleDateString(
                'pt-BR',
                { timeZone: 'UTC' }
              )}
            </td>
            <th>Data de Falecimento</th>
            <td>
              {!props.deputado.data_falecimento
                ? 'Deputado vivo.'
                : new Date(props.deputado.data_falecimento).toLocaleDateString(
                    'pt-BR',
                    { timeZone: 'UTC' }
                  )}
            </td>
          </tr>
          <tr>
            <th>Município de Nascimento</th>
            <td>{props.deputado.municipio_nascimento}/{props.deputado.uf_nascimento}</td>
            <th>Escolaridade</th>
            <td>{props.deputado.escolaridade}</td>
          </tr>
          <tr className="text-center">
            <th colSpan="4">Dados de Contato</th>
          </tr>
          <tr>
            <th>Website</th>
            <td>{props.deputado.website}</td>
            <th>E-mail</th>
            <td><a href = {`mailto: ${props.deputado.email}`}>{props.deputado.email}</a></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
