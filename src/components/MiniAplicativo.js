import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import { Col,Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

export default class MiniAplicativo extends Component {

    styleOnline() {
        return {
            color: this.props.appDemo.estado ? 'green' : 'red'

        }
    }
    render() {

        const { appDemo } = this.props;
       

        return (
            <div>
               <Card className="text-center m-3" 
               bg="light"
               border=""
               style={{width:"21rem"}}  >
                   
                   <Container>
                       <Row>
                           
                           <Col>
                           
                           <Card.Title ><Card.Img className="pr-2 pt-2"
                                width="190"
                               variant="left"

                               src={appDemo.logo} ></Card.Img>
                               
                               </Card.Title>
                           <Card.Subtitle className="pb-1 text-muted">Version {appDemo.version}</Card.Subtitle>
                               <Card.Text style={this.styleOnline()}>Estado</Card.Text>
                               </Col>


                           <Col >
                           
                                <Card.Text className="m-0" style={{fontSize:"14px"}}>{appDemo.nombre}</Card.Text>
                                <Card.Text className="m-0 pb-2" style={{fontSize:"14px"}}>OS: {appDemo.OS}</Card.Text>
                               <Button  style={{height:"35px"}} href={appDemo.url} target="_blank" className=" ml-2" variant="outline-success">Entrar</Button>
                           
                           </Col>
                       </Row>

                   </Container>
               </Card>
            </div>
        )
    }
}
