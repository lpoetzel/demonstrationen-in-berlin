const Post = ({post}) => {
    return (
        <article>
            <h2 id="datum">{post.datum}</h2>
            <h3 id="von-bis">Dauer: {post.von} Uhr - {post.bis} Uhr</h3>
            <br/>
            <p>{post.thema}</p>
            <br/>
            <h3 id="adress">{post.strasse_nr}, {post.plz} Berlin</h3>
        </article>
    )
}
export default Post