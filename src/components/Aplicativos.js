import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MiniAplicativo from './MiniAplicativo';

class Aplicativos extends Component {
    render() {
        return <div className="container p-0 m-0" style={{}}>
            <div>
                {this.props.appDemo.map(appDemo =>
                    <MiniAplicativo appDemo={appDemo} key={appDemo.id} 
                    />)}
            </div>
        </div>

    }

}

Aplicativos.propTypes = {
    appDemo: PropTypes.array.isRequired
}

export default Aplicativos