import {combineReducers} from 'redux';
import LaptopReducer from './laptopReducer';
import NotificationReducer from './notificationReducer';
import AuthReducer from './authReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const laptopPersistConfig = {
    key: 'filterKey',
    storage: storage,
    whitelist: ['laptopFilterKeys']
  };

  const authPersistConfig = {
    key: 'authToken',
    storage: storage,
    whitelist: ['authToken']
  };
  
  const rootReducer = combineReducers({
      laptop: persistReducer(laptopPersistConfig, LaptopReducer),
      notificationR: NotificationReducer,
      authR: persistReducer(authPersistConfig, AuthReducer)
  })

export default rootReducer;