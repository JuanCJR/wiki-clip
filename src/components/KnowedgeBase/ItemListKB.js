import React, { Component } from 'react'
import ItemKB from './ItemKB'
import { Card, Table, Button, ButtonGroup } from 'react-bootstrap'


export default class ItemListKB extends Component {


    render() {

        return (

            <Card className="p-0 m-0" style={{ width: "73rem" }}>
                
                <Table responsive striped bordered hover className="m-0">
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
                        changeLinked={this.props.changeLinked}

                    ></ItemKB>

                </Table>

                <Card.Footer>
                    <ButtonGroup className="text-rigth">
                        <Button 
                            onClick={ async ()=>{
                               await this.props.beforeItems()
                            }}
                            variant="info">Anterior</Button>
                        <Button
                            onClick={async()=>{this.props.nextItems()}}
                            
                            variant="info">Siguiente</Button>
                    </ButtonGroup>

                    
                </Card.Footer>
               
            </Card>
        )
    }//.




}
