import React, { PropTypes } from 'react'

class Nav extends React.Component {
    render () {
        return (
            <div className='main-nav'>
                <ul>
                    <li><a>Devices</a></li>
                    <li><a>Connection Status</a></li>
                    <li><a>Permissions</a></li>
                </ul>
            </div>
        )
    }
}

export default Nav;
