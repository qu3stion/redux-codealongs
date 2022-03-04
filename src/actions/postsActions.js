// Creating/Defining Redux action types

export const GET_POSTS = 'GET_POSTS'
//tells Redux we are going to fetch posts from an API

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
//passes the posts to Redux on successful API call

export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'
//informs Redux that an error was encountered during Redux on
//API call

//Create Redux action creators that return action
export const getPosts = () => ({
  type: GET_POSTS,
})

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
})

export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
})

// must combine three actions above into an asynchronous thunk
//which will be imported to pages
export function fetchPosts() {
  return async (dispatch) => {
    dispatch(getPosts())
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      dispatch(getPostsSuccess(data))
    } catch (error) {
      dispatch(getPostsFailure)
    }
  }
}
//dispatch is a method available on the store object
// that accepts an object which is used to update
//  the redux state
//the object is usually the result of invoking an action creator
