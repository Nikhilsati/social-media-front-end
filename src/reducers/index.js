import { combineReducers } from 'redux';
import message from './message';
import mode from './mode';
import auth from './auth';

export default combineReducers({ message, mode, auth });
