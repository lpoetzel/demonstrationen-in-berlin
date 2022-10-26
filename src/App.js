import { getPosts } from './api/axios'
import { useState, useEffect } from 'react'
import Searchbar from './components/searchbar'
import ListPage from "./components/ListPage"

function App() {
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getPosts().then(json => {
      setPosts(json)
      setSearchResults(json)
    })
  }, [])



  return (
    <>
      <h1>Demonstrationen Suche für Berlin</h1>

      <Searchbar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </>
  )
}

export default App;

