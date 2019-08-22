import React, { Component } from 'react'
import ItemKBPage from './ItemKBPage';
import Button from 'react-bootstrap/Button'

export default class ItemKB extends Component {


   

    render() {
        
        
        return (
                
            <tbody>
               
                {console.log(this.props.url)}
                {this.props.items.map(items =>

                    <tr key={items.id}>
                        
                        <td>
                         <Button
                         onClick={this.props.changeLinked} >
                          {items.id}   
                         </Button>
                            </td>
                        <td>{items.Descripcion}</td>
                        <td>{items.Aplicativo}</td>
                                               
                    </tr>

                )}

            </tbody>

            




        )
    }//.

  



   
}
