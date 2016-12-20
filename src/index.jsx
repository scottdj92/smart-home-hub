import { Router, Route, hashHistory } from 'react-router';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';
import Devices from './app/Devices/Devices';
import ComponentStatus from './app/Connections/Connections';

class Main extends React.Component {
    render () {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={App}/>
                <Route path='/devices' component={Devices}/>
                <Route path='/connections' component={ComponentStatus}/>
            </Router>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementById('main'));
