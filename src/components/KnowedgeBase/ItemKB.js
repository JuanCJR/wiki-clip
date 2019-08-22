import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class ItemKB extends Component {


   

    render() {
        
        
        return (
                
            <tbody>
                {console.log(this.props.url)}
                {this.props.items.map(items =>

                    <tr key={items.id}>
                        <td><a href={`/knowedgeBaseItem/`+ items.Aplicativo + "#" + items.id}>{items.id}</a></td>
                        <td>{items.Descripcion}</td>
                        <td>{items.Aplicativo}</td>
                                               
                    </tr>

                )}

            </tbody>

            




        )
    }//.



   
}
