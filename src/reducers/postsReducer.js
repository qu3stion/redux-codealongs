import * as actions from './actions/postActions'

export const initialState= {
  posts: [],
  loading: false,
  hasErrors: false,
}
// Reducer is Functions that receive inputs 
//And creates the store
export default function postsReducer(state =
initialState, action) {

  switch (action.type) {
    case actions.GET_POSTS:
      return {...state, loading: true}

    case action.GET_POSTS_SUCCESS:
      return { posts: action.payload, loading: false, hasErrors:
      false }

    case action.GET_POSTS_FAILURE:
      return { ...state, loading: false, hasErrors: true}
    default:
      return state
  }
}
// created a basis for our Reducer

//now connect to react application (App.js)
