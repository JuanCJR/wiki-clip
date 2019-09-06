import React, { Component, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

export default class CreateKBItem extends Component {

    state = {
        Aplicativo: "",
        Descripcion: "",
        Tipo: "",
        Contenido: "",
        Autor: ""
    }

    onChangeDescripcion = (e) => {
        this.setState({
            Descripcion: e.target.value
        });
    }


    onChangeAplicativo = (e) => {
        this.setState({
            Aplicativo: e.target.value
        });
    }

    onChangeTipo = (e) => {
        this.setState({
            Tipo: e.target.value
        });

    }

    onChangeContenido = (e) => {
        this.setState({
            Contenido: e.target.value
        });

    }

    onChangeAutor = (e) => {
        this.setState({
            Autor: e.target.value
        });

    }


    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/api/KnowedgeBase', this.state);
        
        await this.props.refreshData();


        this.props.changeCreateLink();

    }//.

    //Ventana de confirmacion
    Example = () => {

        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
                <Button variant="primary" onClick={handleShow}>
                    Enviar
      </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Guardar Nuevo Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Se guardara el siguiente Item en la base de conociemientos.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
        </Button>
                        <Button variant="primary" type="submit" onClick={this.onSubmit}>
                            Guardar
        </Button>
                    </Modal.Footer>
                </Modal>
            </>

        )

    }



    render() {
        return (
            <Card className="pl-3" style={{ width: "73rem" }} >

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
                            <option>X-Analysis</option>
                        </Form.Control>

                    </Form.Group>
                    <Form.Group onChange={this.onChangeDescripcion} controlId="Descripcion">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control placeholder="Ingrese una Descripcion"
                        ></Form.Control>
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
                        <Form.Control as="textarea" rows="5" />
                    </Form.Group>
                    <Form.Group controlId="Autor"
                        onChange={this.onChangeAutor}>
                        <Form.Label>Autor</Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    <this.Example></this.Example>
                    <Button className="ml-4"
                        variant="primary" type="link">
                        Volver
</Button>

                </Form>
            </Card>




        )
    }
}
