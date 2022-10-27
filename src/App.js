import { getPosts } from "./api/axios";
import { useState, useEffect } from "react";
import Searchbar from "./components/searchbar";
import ListPage from "./components/ListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Impressum from "./pages/Impressum";
import Header from "./components/Header";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getPosts().then((json) => {
      setPosts(json);
      setSearchResults(json);
    });
  }, []);

  return (
    <>
      <div className="navBar">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  posts={posts}
                  setSearchResults={setSearchResults}
                  searchResults={searchResults}
                />
              }
            />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <h1>Demonstrationen Suche für Berlin</h1> */}

      {/* <Searchbar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} /> */}
    </>
  );
}

export default App;
