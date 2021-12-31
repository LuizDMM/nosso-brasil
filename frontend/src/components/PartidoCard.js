import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

function PartidoCard(props) {
  return (
    <div className="col-4 p-3">
      <Card key={props.api_id} className="text-center">
        <CardBody>
          <CardTitle tag="h5">
            <strong>{props.partido.sigla}</strong>
          </CardTitle>
          <CardSubtitle tag="h6">{props.partido.nome}</CardSubtitle>
          <CardText>Líder: {((props.partido.lider) ? props.partido.lider : 'Sem Líder na Câmara')}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default PartidoCard
