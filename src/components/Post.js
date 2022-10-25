const Post = ({post}) => {
    return (
        <article>
            <h2>{post.datum}</h2>
            <p>{post.thema}</p>
            <p>Von:{post.von} bis:{post.bis}</p>
        </article>
    )
}
export default Post