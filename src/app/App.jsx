import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import './_main.scss';

class App extends React.Component {
    render () {
        return (
            <div className='container'>
                
            </div>
        )
    }

    mapStateToProps(state) {
        return {
            devices: state.devices
        };
    }
}

export default App;
