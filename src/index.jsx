import { Router, Route, hashHistory } from 'react-router';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

//import redux
import { Provider } from 'react-redux';
import store from './store/configureStore';

import App from './app/App';
import Devices from './app/components/Devices/Devices';
import ComponentStatus from './app/components/Connections/Connections';

class Main extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path='/' component={App}/>
                    <Route path='/devices' component={Devices}/>
                    <Route path='/connections' component={ComponentStatus}/>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementById('main'));
