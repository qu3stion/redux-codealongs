import { useEffect } from 'react';
import { connect } from 'react-redux';
//connect function is one way to connect React to Redux
//  a connected component is sometimes called a container
import { fetchPosts } from '../action/postActions';
import { Post } from './components/Posts';

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Unable to display posts.</p>
    return posts.map((posts) => <Post key={posts.id} post={post}/>)
  }

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  )
}

//Map Redux state to React component props
const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
  })

export default connect(mapStateToProps)(PostsPage)
