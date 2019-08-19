import React, { Component } from 'react'

export default class ItemKB extends Component {

    renderFiveApps(){
        const fiveApps = this.props.ItemBD.filter(ItemBD => ItemBD.id <3);
        return fiveApps; 
    }


    render() {
       
       const f =  this.renderFiveApps();
        console.log(f);
        return (
            
           <tbody>
               
           {f.map( f =>
              
              <tr key={f.id}>
                  <td><a href={f.url}>{f.id}</a></td>
                  <td>{f.Descripcion}</td>
                  <td>{f.Aplicativo}</td>
              </tr>
              )}
               
           </tbody>
        )
    }
}
