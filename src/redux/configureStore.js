import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import messageReducer from './message/message';

const store = createStore(
  combineReducers({
    messages: messageReducer,
  }),
  applyMiddleware(thunk),
);

export default store;
