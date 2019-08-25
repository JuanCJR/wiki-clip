import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
export default class ItemKBPage extends Component {
   
    render() {
        const actualItem = this.props.actualItem[0];
        console.log(actualItem);
        return (
            
                <Card className="p-0 m-0" style={{width:"73rem" }}>
                    <Card.Header>
                    
                        <h1>{actualItem.Descripcion}
                        <Button 
                        onClick={this.props.changeLinked}
                        className="mb-1"style={{marginLeft:"1rem"}} variant="primary" >Volver</Button>
                        </h1>
                        

                    </Card.Header>



                    <Card.Subtitle className="text-muted mt-1  border-bottom">

                        <div className="border-bottom pl-4 pb-1">
                            <h6>KB Articulo {actualItem._id}</h6>
                            <br />
                            <h6 >{actualItem.createdAt}</h6>
                            <h6>Autor: {actualItem.Autor}</h6>
                        </div>

                        <div className=" pl-4 mt-1 pb-1">
                            <h6>Producto: {actualItem.Aplicativo}</h6>
                            <br/>
                            <h6>{actualItem.Tipo}</h6>
                        </div>
                    </Card.Subtitle>
                    <Card.Body>
                    
                   {actualItem.Contenido}

                    </Card.Body>

                </Card>
            
        )
    }
}
