const Post = ({ post }) => {
  const street = `${post.strasse_nr}`;
  const display = street.length ? (`${street}, ${post.plz} Berlin`) : `${post.aufzugsstrecke}`;
  return (
    <article>
      <h2 id="datum">{post.datum}</h2>
      <h3 id="von-bis">
        Dauer: {post.von} Uhr - {post.bis} Uhr
      </h3>
      <br />
      <p>{post.thema}</p>
      <br />
      <h3 id="adress">{display}</h3>
      <a id="maps-link"href={`https://www.google.com/maps/search/?api=1&query=${display}`} target="_blank" rel="noreferrer">Auf der Karte ansehen</a>
    </article>
  );
};
export default Post;
