import React, { Component } from 'react'
import { Card, Table, Container, Row, Col, ListGroup } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import ItemBD from './itemBD';
import ItemKB from './ItemKB';

export default class KnowedgeBase extends Component {
    render() {
        return (
            <Card className="">
                <Card.Header><h1>Base de Conocimientos</h1></Card.Header>
                <Container className="m-0 p-0 mw-100 ">
                    <Row className="m-0 mw-100 " >
                        <Col className="p-0 m-0" style={{ width: "12rem", flexGrow:"0" }}>
                            <Card className="m-0 p-0" style={{ width: "12rem", height: "100%"}}>
                                <ListGroup>
                                    <ListGroup.Item><a href="/">Aldon</a></ListGroup.Item>
                                    <ListGroup.Item><a href="/">Enforcive</a></ListGroup.Item>
                                    <ListGroup.Item><a href="/">Presto</a></ListGroup.Item>
                                    <ListGroup.Item><a href="/">GoAnywhere</a></ListGroup.Item>
                                    <ListGroup.Item><a href="/">X-Analysis</a></ListGroup.Item>

                                </ListGroup>
                            </Card>
                        </Col>
                        <Col className="p-0 m-0" style={{width:"80rem", flexGrow:"0" }}>
                            <Card classname="p-0 m-0" style={{width:"73rem" }}>


                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Descripcion</th>
                                            <th>Aplicativo</th>
                                        </tr>
                                    </thead>

                                    <ItemKB ItemBD={ItemBD}></ItemKB>
                                    
                                </Table>

                                <Card.Footer>
                                    <ButtonGroup className="text-rigth">
                                        <Button variant="outline-primary">Anterior</Button>
                                        <Button variant="outline-primary">Siguiente</Button>
                                    </ButtonGroup>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Card>
        )
    }
}
