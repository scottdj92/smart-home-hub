import React, { PropTypes } from 'react';
import Nav from './Nav/Nav';

// import './_main.scss';

class App extends React.Component {
    render () {
        return (
            <div className='container'>
                <Nav/>
                <h1>Hello World!</h1>
            </div>
        )
    }
}

export default App;
