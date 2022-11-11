import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
const Post = ({ post }) => {
  const [show, setShow] = useState(false);
  const street = `${post.strasse_nr}`;
  const tweetDisplay = street.length
    ? `${street} , ${post.plz} Berlin `
    : `${post.aufzugstrecke}`;
  const display = street.length ? (
    <div>
      {street}, {post.plz} Berlin{" "}
      <a
        id="maps-link"
        href={`https://www.google.com/maps/search/?api=1&query=${street}`}
        target="_blank"
        rel="noreferrer"
      >
        Auf der Karte ansehen
      </a>
    </div>
  ) : (
    <div>
      {post.aufzugsstrecke.slice(0, 30)}...
      <div>
        {show ? (
          <div>
            <h3>{post.aufzugsstrecke.slice(30)}</h3>
            <br />
          </div>
        ) : null}
        <button id="strecke-popup" onClick={() => setShow(!show)}>
          Gesamte Strecke
        </button>
      </div>
    </div>
  );
  return (
    <article>
      <h2 id="datum">{post.datum}</h2>
      <h3 id="von-bis">
        Dauer: {post.von} Uhr - {post.bis} Uhr
      </h3>
      <br />
      <p>{post.thema}</p>
      <br />
      <h3>{display}</h3>
      <a
        class="twitter-share-button"
        href={`https://twitter.com/intent/tweet?text=${post.datum} ${post.von}-${post.bis} %0a ${post.thema} %0a ${tweetDisplay}`}
        data-size="large"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <button id="none" />
    </article>
  );
};
export default Post;
