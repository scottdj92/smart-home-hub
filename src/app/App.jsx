import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Nav from './components/Nav/Nav';

import './_main.scss';

class App extends React.Component {
    render () {
        return (
            <div className='container'>
                <Nav/>
                { React.cloneElement(this.props.children, ...this.props) }
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
