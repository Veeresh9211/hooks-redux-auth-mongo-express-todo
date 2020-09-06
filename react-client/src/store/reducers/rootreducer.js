import {combineReducers} from 'redux';
import LaptopReducer from './laptopReducer';
import NotificationReducer from './notificationReducer';
import AuthReducer from './authReducer';
import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session'

const laptopPersistConfig = {
    key: 'laptopFilterDetails',
    storage: storageSession,
    whitelist: ['laptopFilterKeys']
  };

  const authPersistConfig = {
    key: 'userDetails',
    storage: storageSession,
    whitelist: ['authToken','loginStatus','userName']
  };
  
  const rootReducer = combineReducers({
      laptop: persistReducer(laptopPersistConfig, LaptopReducer),
      notificationR: NotificationReducer,
      authR: persistReducer(authPersistConfig, AuthReducer)
  })

export default rootReducer;