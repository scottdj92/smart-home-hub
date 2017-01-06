import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

//import redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

//import react-router-redux to sync store with hashHistory
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();

const history = syncHistoryWithStore(hashHistory, store);

import App from './app/App';
import Home from './app/components/Home/Home';
import Devices from './app/components/Devices/Devices';
import ComponentStatus from './app/components/Connections/Connections';

class Main extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path='/' component={App}>
                        <IndexRoute component={Home}/>
                        <Route path='devices' component={Devices}/>
                        <Route path='connections' component={ComponentStatus}/>
                    </Route>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementById('main'));
