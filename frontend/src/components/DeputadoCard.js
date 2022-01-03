import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function DeputadoCard(props) {
    return (
        <div className="col-lg-4 p-3" key={props.deputado.api_id}>
            <LinkContainer to={`/deputados/${props.deputado.api_id}`}>
                <Card className="text-center h-100 CardWithEffect">
                    <CardBody>
                        <CardTitle tag="h5">
                            <strong>{props.deputado.nome}</strong>
                        </CardTitle>
                        <CardSubtitle tag="h6">
                            {props.deputado.partido} - {props.deputado.sigla_uf}
                        </CardSubtitle>
                    </CardBody>
                </Card>
            </LinkContainer>
        </div>
    )
}