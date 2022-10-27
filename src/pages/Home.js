import React from "react";
import ListPage from "../components/ListPage";
import Searchbar from "../components/searchbar";

const Home = (props) => {
  const { posts, setSearchResults, searchResults } = props;
  return (
    <div>
      <h1>Demonstrationen Suche für Berlin</h1>

      <Searchbar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </div>
  );
};

export default Home;
