import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class ItemKB extends Component {

    render() {
        
        
        return (
                
            <tbody>
               
                
                {this.props.items.map(items =>

                    <tr key={items.id}>
                        
                        <td>
                         <Button
                         onClick={()=>{
                            const changeLinked = this.props.changeLinked; 
                            return(
                                changeLinked(items._id)
                             )
                         }
                            
                         } >
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
