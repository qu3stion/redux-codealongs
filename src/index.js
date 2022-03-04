import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
//have to setup devtools manually
import { composeWithDevTools } from 'redux-devtools-extension';

//createStore, creates the store that will maintain the Redux
//state

import App from './App'
import rootReducer from './reducers'

import './index.css'

//apply middlewre handles thunk
//rootReducer will show state
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

//Provider wraps around where you want to place the Redux
//by putting store inside of provider youre making it avaliable
//to whole app
render(
  <Provider store={store}>
    <App />
  </Provider>
)
