const Post = ({post}) => {
    return (
        <article>
            <h2>{post.datum}</h2>
            <p>{post.thema}</p>
            <p>Post ID: {post.id}</p>
        </article>
    )
}
export default Post