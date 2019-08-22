import React, { Component } from 'react'
import ItemKBPage from './ItemKBPage';


export default class ItemKB extends Component {


    i = () =>{
        return(
            <ItemKBPage></ItemKBPage>
        )
    }

    render() {
        
        
        return (
                
            <tbody>
               
                {console.log(this.props.url)}
                {this.props.items.map(items =>

                    <tr key={items.id}>
                        
                        <td>
                         
                            
                            <a                     
                        href={`/knowedgeBaseItem/`+ items.Aplicativo + "#" + items.id}>{items.id}</a></td>
                        <td>{items.Descripcion}</td>
                        <td>{items.Aplicativo}</td>
                                               
                    </tr>

                )}

            </tbody>

            




        )
    }//.

  



   
}
