import { Link } from 'react-router';
import React, { PropTypes } from 'react';

class Nav extends React.Component {
    render () {
        return (
            <div className='main-nav'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/devices'>Devices</Link></li>
                    <li><Link to='/connections'>Connection Status</Link></li>
                    <li><a>Permissions</a></li>
                </ul>
            </div>
        )
    }
}

export default Nav;
