import { createStore } from 'redux';
import combinedReducer from '../reducers/index.js';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(combinedReducer, composeWithDevTools());
export default store;
