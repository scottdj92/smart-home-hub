import { combineReducers } from 'redux';
import DeviceReducer from './devices';

const rootReducer = combineReducers({
    devices: DeviceReducer
});

export default rootReducer;
