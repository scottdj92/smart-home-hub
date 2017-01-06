import { combineReducers } from 'redux';
import DeviceReducer from './devices';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    devices: DeviceReducer,
    routing: routerReducer
});

export default rootReducer;
