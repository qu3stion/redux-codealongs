export const Post = ({ post }) => {
  <article className="post-excerpt">
    <h2>{ post.title }</h2>
    <p>{ post.body.substring(0, 100) }</p>

  </article>
}

//this component doesnt connect to Redux
//it still plays a vital role with the blog
