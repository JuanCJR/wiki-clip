import React, { Component } from 'react'

export default class ScrollContainer extends Component {

 
   

    render() {
        return (
            <div className="scrollbar" id="style-1"
               style={{width:this.props.changeStyle.width,height:this.props.changeStyle.height}}
            >
                <div class="force-overflow">

                </div>
            </div>
        )
    }
}
