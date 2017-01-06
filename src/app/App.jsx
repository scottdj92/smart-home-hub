import React, { PropTypes } from 'react';
import Nav from './components/Nav/Nav';

import './_main.scss';

class App extends React.Component {
    render () {
        return (
            <div className='container'>
                <Nav/>
                <h1>Welcome to the Smart Home Hub.</h1>
                <h4>Your Status</h4>
            </div>
        )
    }
}

export default App;
