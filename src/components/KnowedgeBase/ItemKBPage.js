import React, { Component } from 'react'
import NavBar from '../NavBar'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
export default class ItemKBPage extends Component {
    render() {
        return (
            
                <Card className="p-0 m-0" style={{width:"73rem" }}>
                    <Card.Header>
                    
                        <h1>Several Fixes Available in GoAnywhere MFT 6.1.6
                        <Button 
                        onClick={this.props.changeLinked}
                        className="mb-1"style={{marginLeft:"7rem"}} variant="primary" >Volver</Button>
                        </h1>
                        

                    </Card.Header>



                    <Card.Subtitle className="text-muted mt-1  border-bottom">

                        <div className="border-bottom pl-4 pb-1">
                            <h7>KB Articulo 1</h7>
                            <br />
                            <h7 >22/08/2019</h7>
                        </div>

                        <div className=" pl-4 mt-1 pb-1">
                            <h7>Producto: GoAnywhere</h7>
                            <br/>
                            <h7>Tipo:Actualizacion</h7>
                        </div>
                    </Card.Subtitle>
                    <Card.Body>
                        <ul>
                            <li>
                                Added EDI X12 transaction sets for versions 002xxx and 003xxx to the online marketplace.
                            </li>
                            <li>
                                Added support for EDI X12 versions 002xxx and 003xxx in the Read and Write EDI X12 tasks.
                            </li>
                            <li>
                                Added indexes to the Secure Form payload table to improve efficiency and processing speed of the database queries.

                            </li>
                            <li>
                                Added additional validation when loading a sample XML document in the UI Data Mapper.
                            </li>
                            <li>
                                Added some missing translated messages on the edit Admin User and edit Admin Role pages.
                            </li>
                            <li>
                                Added some missing translated messages on the edit Admin User and edit Admin Role pages.
                            </li>
                            <li>
                                Added some missing translated messages on the edit Admin User and edit Admin Role pages.
                            </li>
                            <li>
                                Added some missing translated messages on the edit Admin User and edit Admin Role pages.
                            </li>
                            <li>
                                Added some missing translated messages on the edit Admin User and edit Admin Role pages.
                            </li>
                            <li>
                                Added some missing translated messages on the edit Admin User and edit Admin Role pages.
                            </li>
                            <li>
                                Added some missing translated messages on the edit Admin User and edit Admin Role pages.
                            </li>
                            <li>
                                Added some missing translated messages on the edit Admin User and edit Admin Role pages.
                            </li>


                        </ul>

                    </Card.Body>

                </Card>
            
        )
    }
}
