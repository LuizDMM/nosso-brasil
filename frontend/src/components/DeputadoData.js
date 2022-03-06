import React from 'react'
import { Table } from 'reactstrap'

export default function DeputadoData({ deputado }) {
  function formataCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }

  return (
    <div className="container mt-2">
      <Table responsive>
        <tbody>
          <tr className="text-center">
            <th colSpan="4"><h3>Dados Pessoais</h3></th>
          </tr>
          <tr>
            <th>Nome Civil</th>
            <td colSpan="3">{deputado.nome_civil}</td>
          </tr>
          <tr>
            <th>Partido</th>
            <td>
              {deputado.partido} - {deputado.sigla_uf}
            </td>
            <th>Situação</th>
            <td>{deputado.condicao_eleitoral}</td>
          </tr>
          <tr>
            <th>Gênero</th>
            <td>{deputado.sexo == 'M' ? 'Masculino' : 'Feminino'}</td>
            <th>CPF</th>
            <td>{formataCPF(deputado.cpf)}</td>
          </tr>
          <tr>
            <th>Data de Nascimento</th>
            <td>
              {new Date(deputado.data_nascimento).toLocaleDateString(
                'pt-BR',
                { timeZone: 'UTC' }
              )}
            </td>
            <th>Data de Falecimento</th>
            <td>
              {!deputado.data_falecimento
                ? 'Deputado vivo.'
                : new Date(deputado.data_falecimento).toLocaleDateString(
                    'pt-BR',
                    { timeZone: 'UTC' }
                  )}
            </td>
          </tr>
          <tr>
            <th>Município de Nascimento</th>
            <td>{deputado.municipio_nascimento}/{deputado.uf_nascimento}</td>
            <th>Escolaridade</th>
            <td>{deputado.escolaridade}</td>
          </tr>
          <tr className="text-center">
            <th colSpan="4">Dados de Contato</th>
          </tr>
          <tr>
            <th>Website</th>
            <td>{deputado.website}</td>
            <th>E-mail</th>
            <td><a href = {`mailto: ${deputado.email}`}>{deputado.email}</a></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
