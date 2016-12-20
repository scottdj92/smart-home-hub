import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Nav from './app/Nav/Nav';

// import './_main.scss';

class App extends React.Component {
    render () {
        return (
            <div className='container'>
                <Nav/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
