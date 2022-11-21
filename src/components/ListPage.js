import React, { useEffect, useState } from "react";
import Post from "./Post";
import { BarLoader } from "react-spinners";
const ListPage = ({ searchResults }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const results = searchResults.map((post) => (
    <Post key={post.id} post={post} />
  ));

  const content = results?.length ? (
    results
  ) : (
    <article>
      <p id="no-matches">Leider keine Treffer</p>
    </article>
  );
  return (
    <main>
      {loading ? (
        <article>
          <BarLoader
            className="loader"
            height={10}
            speedMultiplier={2}
            color="white"
            size={300}
          />
        </article>
      ) : (
        content
      )}
    </main>
  );
};

export default ListPage;
