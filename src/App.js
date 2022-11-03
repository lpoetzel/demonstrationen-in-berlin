import { getPosts } from "./api/axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Impressum from "./pages/Impressum";
import Header from "./components/Header";
import { formattedToday } from "./components/searchbar";



function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
 


  useEffect(() => {
    getPosts().then((json) => {
      setPosts(json);
      const filteredByDate = json.filter(ele => ele.datum.includes(formattedToday))
      setSearchResults(filteredByDate);
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
            <Route path="/calendar" element={<Calendar 
            posts={posts}
            
            />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
