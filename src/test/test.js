import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
export default class test extends Component {


    state ={
            Aplicativo:"",
            Descripcion:"",
            Tipo:"",
            Contenido:"",
            Autor:""
    }
    onChangeDescripcion = (e) =>{
        this.setState({
            Descripcion: e.target.value
        });
        console.log(e.target.value);
    }


    onChangeAplicativo = (e) =>{
        this.setState({
            Aplicativo: e.target.value
        });
        console.log(e.target.value);
    }

    onChangeTipo = (e) =>{
        this.setState({
            Tipo: e.target.value
        });
        console.log(e.target.value);
    }

    onChangeContenido = (e) =>{
        this.setState({
            Contenido: e.target.value
        });
        console.log(e.target.value);
    }

    onChangeAutor = (e) =>{
        this.setState({
            Autor: e.target.value
        });
        console.log(e.target.value);
    }

    onSubmit = async (e) =>{
        e.preventDefault();
        const res = await axios.post('http://localhost:8080/api/KnowedgeBase',this.state);
        console.log(res);

      
    }

    render() {
        return (
            <Card className="container w-50 pb-3">

                
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Aplicativo">
                        <Form.Label>Aplicativo</Form.Label>
                        <Form.Control as="select" 
                        placeholder="Seleccione un Aplcativo"
                         onChange={this.onChangeAplicativo}
                       >
                           <option>Seleccione un Aplicativo</option>
                            <option>GoAnywhere</option>
                            <option>Aldon</option>
                            <option>Enforcive</option>
                            <option>Presto</option>
                        </Form.Control>

                    </Form.Group>
                    <Form.Group controlId="Descripcion">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control placeholder="Ingrese una Descripcion"
                        onChange={this.onChangeDescripcion}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="Tipo">
                        <Form.Label>Tipo de documento</Form.Label>
                        <Form.Control as="select"
                        onChange={this.onChangeTipo}>
                            <option>Selecione el Tipo de Documento</option>
                            <option>Actualizacion</option>
                            <option>Correcion de errores</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="Contenido" 
                    onChange={this.onChangeContenido}>
                       <Form.Label>Contenido</Form.Label>
                       <Form.Control as="textarea" rows="5"/>
                    </Form.Group>
                    <Form.Group controlId="Autor"
                    onChange={this.onChangeAutor}>
                        <Form.Label>Autor</Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar  
            </Button>
                </Form>
            </Card>

        )
    }
}
