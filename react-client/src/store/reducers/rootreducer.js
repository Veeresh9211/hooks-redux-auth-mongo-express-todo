import {combineReducers} from 'redux';
import LaptopReducer from './laptopReducer';
import NotificationReducer from './notificationReducer';

const rootReducer = combineReducers({
    laptop: LaptopReducer,
    notificationR: NotificationReducer
})

export default rootReducer;