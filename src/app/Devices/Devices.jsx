import React, { PropTypes } from 'react';

import Nav from '../../app/Nav/Nav';

class Devices extends React.Component {
    render () {
        return (
            <div className='devices'>
                <Nav/>
                <h1>Device Status</h1>
            </div>
        )
    }
}

export default Devices;
