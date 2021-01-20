import { createStore } from 'redux';
import combinedReducer from '../reducers/index.js';
const store = createStore(combinedReducer);
export default store;
