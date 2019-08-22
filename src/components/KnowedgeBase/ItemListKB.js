import React, { Component } from 'react'
import ItemKB from './ItemKB'
import {Card, Table, Button, ButtonGroup} from 'react-bootstrap'

export default class ItemListKB extends Component {
    
      
    render() {
      
        
        return (
           
            <Card classname="p-0 m-0" style={{width:"73rem" }}>
                                
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Descripcion</th>
                                            <th>Aplicativo</th>
                                        </tr>
                                    </thead>

                                    <ItemKB 
                                    renderFiveItems={this.props.renderFiveItems}
                                    items={this.props.items}
                                    nroItems={this.props.nroItems}
                                    
                                    ></ItemKB>
                                    
                                </Table>

                                <Card.Footer>
                                    <ButtonGroup className="text-rigth">
                                        <Button 
                                        onClick={this.props.beforeItems}
                                        variant="outline-primary">Anterior</Button>
                                        <Button 
                                        onClick={this.props.nextItems}
                                        variant="outline-primary">Siguiente</Button>
                                    </ButtonGroup>
                                </Card.Footer>
                            </Card>
        )
    }

    
}
