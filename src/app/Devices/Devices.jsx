import React, { PropTypes } from 'react';

import Nav from '../../app/Nav/Nav';

import testDevices from './fixtures/sample-devices';

class Devices extends React.Component {

    showDeviceStatus(device, index) {
        return (
            <div className='device row' key={index}>
                <div className='column'>
                    <span>{device.id}</span>
                </div>
                <div className='column'>
                    <span>{device.name}</span>
                </div>
                <div className='column'>
                    <span>{device.owner}</span>
                </div>
                <div className='column'>
                    <span>{device.connected}</span>
                </div>
            </div>
        )
    }

    createTableHeader() {
        return (
            <div className='row'>
                <div className='column'>
                    <h4>Device ID</h4>
                </div>
                <div className='column'>
                    <h4>Device Name</h4>
                </div>
                <div className='column'>
                    <h4>Device Owner</h4>
                </div>
                <div className='column'>
                    <h4>Connection Status</h4>
                </div>
            </div>
        )
    }

    render () {
        return (
            <div className='devices container'>
                <Nav/>
                <h1>Device Status</h1>
                {this.createTableHeader()}
                {testDevices.map( (data, index) => this.showDeviceStatus(data, index) )}
            </div>
        )
    }
}

export default Devices;
