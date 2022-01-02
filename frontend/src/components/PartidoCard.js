import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function PartidoCard(props) {
  return (
    <div className="col-lg-4 p-3" key={props.partido.api_id}>
      <LinkContainer to={`/partidos/${props.partido.api_id}`}>
        <Card className="text-center h-100">
          <CardBody>
            <CardTitle tag="h5">
              <strong>{props.partido.sigla}</strong>
            </CardTitle>
            <CardSubtitle tag="h6">{props.partido.nome}</CardSubtitle>
            <CardText>
              Líder:{' '}
              {props.partido.lider
                ? props.partido.lider
                : 'Sem Líder na Câmara'}
            </CardText>
          </CardBody>
        </Card>
      </LinkContainer>
    </div>
  )
}
