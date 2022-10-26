import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const today = new Date();
console.log(today)
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;

export const formattedToday = dd + "." + mm + "." + yyyy;

const Searchbar = ({ posts, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();
  const handleSearchChange = (e) => {
    if (!e.target.value) {
      return setSearchResults(
        posts.filter((post) => post.datum.includes(formattedToday))
      );
    }
    if (!isNaN(e.target.value)) {
      const resultsArray = posts.filter(
        (post) =>
          post.datum.includes(e.target.value) ||
          post.plz.includes(e.target.value)
      );
      setSearchResults(resultsArray);
    } else {
      const resultsArray = posts.filter(
        (post) =>
          post.thema.toLowerCase().includes(e.target.value.toLowerCase()) ||
          post.strasse_nr.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(resultsArray);
    }
  };

  return (
    <header>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          id="SEARCH"
          onChange={handleSearchChange}
          placeholder="Suche nach Ort, Thema,Datum..."
        />
        <button className="search__button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </header>
  );
};

export default Searchbar;

