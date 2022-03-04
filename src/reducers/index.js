import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

//creating reducer
//the state, via combineReducers, will update postsReducer

const rootReducer = combineReducers({
  //initial state
  posts: postsReducer,
})
