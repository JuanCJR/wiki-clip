import React, { Component } from 'react'
import { Card } from 'react-bootstrap';


class Aplicativo extends Component {

    styleOnline() {
        return {
            color: this.props.appDemo.estado ? 'green' : 'red'

        }
    }

    render() {

        
        const { appDemo } = this.props;

        return <div className="col-md-3 " style={{ paddingBottom: '15px' }}>
            <Card className="text-center" style={{ width: '20rem' }}>
                <Card.Header style={{ backgroundColor: "white" }}>
                    <Card.Title>{appDemo.nombre}</Card.Title>
                    <Card.Subtitle className="text-muted">Version {appDemo.version}</Card.Subtitle>
                    <br />
                    <Card.Img className="w-50 h-50 mb-4" variant="top" src={appDemo.logo} />
                    <Card.Subtitle style={this.styleOnline()}>Estado</Card.Subtitle>

                </Card.Header>
                <Card.Body>

                    <Card.Text>

                        OS: {appDemo.OS}
                        <br />
                        {appDemo.descripcion}



                    </Card.Text>
                    <Card.Link className="btn btn-primary" target="_blank" href={appDemo.url}> Entrar</Card.Link>
                </Card.Body>
            </Card>


        </div>


    }
}


export default Aplicativo;
