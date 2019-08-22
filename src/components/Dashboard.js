import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Aplicativos from './Aplicativos';
import appDemo from '../data/appdemo.json'; 
import Toast from 'react-bootstrap/Toast'
import Carousel from 'react-bootstrap/Carousel'
import Table from 'react-bootstrap/Table'

export default class Dashboard extends Component {


  render() {
    return (
      <div className="">
        <Container className="m-1 p-0" style={{flexGrow:"0", maxWidth:"98%"}}>
          <Row>
            <Col style ={{flexGrow:"0"}}>
              {/* Contenedor de Aplicativos */}
              <Card className="" style={{ marginTop: "25px", width: "25rem" }} bg="light" text="black" >
                <Card.Header>Aplicativos</Card.Header>
                <Card.Body className="scrollbar text-center" id="style-1" style={{ height: "454px" }} >

                  <Card.Body className="force-overflow">

                    <Aplicativos appDemo={appDemo}></Aplicativos>
                    
                  </Card.Body>


                </Card.Body>
              </Card>

            </Col>
            <Col>
              <Row>
                <Col>
                  {/* Contenedor de Carrusel */}
                  <Card className="mr-0 ml-0" bg="light" text="dark" style={{ marginTop: "25px", heigth: "11rem", width: "30rem" }}>
                    <Card.Header>Avances de Laboratorio</Card.Header>

                    <Card.Body>
                      <Carousel className="p-0 m-0">
                        <Carousel.Item>
                          <img
                            className="d-block w-100 "
                            src="/img/black.png"
                            alt="First slide"
                            height="200"
                          />
                          <Carousel.Caption>
                            <h3>Actualizacion GoAnywhere</h3>
                            <p>Actualizacion a la nueva version 6.1.7 previamente instalada</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src="/img/black.png"
                            alt="Third slide"
                            height="200"
                          />

                          <Carousel.Caption>
                            <h3>Correccion de errores Web Portal</h3>
                            <p>Nuevo PTF para correccion de errores de servicio.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src="/img/black.png"
                            alt="Third slide"
                            height="200"
                          />

                          <Carousel.Caption>
                            <h3>Levantamiento de nuevos servidores</h3>
                            <p>Nuevo servidores Linux y Windows server instalados</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>




                    </Card.Body>
                  </Card>
                </Col>

                <Col className="m-0" style={{ width: "12rem" }} >

                  {/*Servidores*/}
                  <Card bg="light" 
                  className="mr-1 ml-1"
                  text="dark" style={{ marginTop: "25px", width: "23rem"}}>
                    <Card.Header>Servidores</Card.Header>
                    <Card.Body className="scrollbar text-center" id="style-1" style={{height:"15rem" }} >

                      <Card.Body className="force-overflow" style={{}}>

                        {/* Tabla  */}

                        <Table style={{ fontSize: "13px" }} striped bordered hover>
                          <thead>
                            <tr>
                              <th>IP</th>
                              <th>Nombre</th>
                              <th>OS</th>
                              <th>Estado</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>192.166.1.21</td>
                              <td>IBM i</td>
                              <td>LAB72</td>
                              <td>OK</td>
                            </tr>
                            <tr>
                              <td>192.168.0.154</td>
                              <td>Centos</td>
                              <td>Oto</td>
                              <td>OK</td>
                            </tr>
                            <tr>
                              <td>192.168.0.56</td>
                              <td>Windows Server</td>
                              <td>CMS</td>
                              <td>OK</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Card.Body>


                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row >
                <Col  sm>


                  {/* Contenedor de Notocias */}
                  <Card className="ml-1" style={{ marginTop: "20px", width:"55rem"}}>
                    <Card.Header>Noticias</Card.Header>
                    <Card.Body className="scrollbar text-center" id="style-1" style={{height: "130px" }} >

                      <Card.Body className="force-overflow" >

                        {/* Tabla  */}

                        <Toast>
                          <Toast.Header >
                            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                            <strong className="mr-auto">GoAnywhere</strong>
                            <small>11 mins ago</small>
                          </Toast.Header>
                          <Toast.Body>Several Fixes Available in GoAnywhere MFT 6.1.6
                          </Toast.Body>
                          <Button variant="outline-info">Ir</Button>
                        </Toast>
                            {/*--------------------*/}
                          <div className="toast"> 
                            <div className="toast-header">
                              <strong className="mr-auto">GoAnywhere</strong>
                              <small>11 mins ago</small>
                            </div>
                            <div className="toast-body"></div>
      hola




                          </div>


                         {/*--------------------*/}
                        

                      </Card.Body>


                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}
