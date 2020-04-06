import React from "react";
import labels from "../../../en.json";
import "./Search.css";

function Search(props) {
  const {handleSubmit, setRef} = props;

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        className="Search-input"
        type="text"
        placeholder={labels.searchBar.PLACEHOLDER}
        name="search"
        ref={setRef}
      />
    </form>
  );
}

export default Search;
