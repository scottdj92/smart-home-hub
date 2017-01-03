const bleno = require('bleno');

const name = 'hub';

bleno.on('stateChange', function(state) {
    if (state === 'poweredOn') {
        console.log('bleno is on');
        bleno.startAdvertising(name, ['ec00']);
    } else {
        console.log('bleno is off');
        bleno.stopAdvertising();
    }
});

bleno.on('advertisingStart', function(error) {
    if (!error) {
        bleno.setServices([
            uuid: 'ec00',
        ])
    }
});
