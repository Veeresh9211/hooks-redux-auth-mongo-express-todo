import {combineReducers} from 'redux';
import LaptopReducer from './laptopReducer';
import NotificationReducer from './notificationReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const laptopPersistConfig = {
    key: 'filterKey',
    storage: storage,
    whitelist: ['laptopFilterKeys']
  };
const rootReducer = combineReducers({
    laptop: persistReducer(laptopPersistConfig, LaptopReducer),
    notificationR: NotificationReducer
})

export default rootReducer;