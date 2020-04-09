import React from "react";
import labels from "../../../en.json";
import "./Search.css";

function Search(props) {
  const {handleSubmit,handleChange, setRef, value} = props;

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        className="Search-input"
        type="text"
        placeholder={labels.searchBar.PLACEHOLDER}
        name="search"
        onChange={handleChange}
        value={value}
        //defaultValue="Valor defecto"
      />
    </form>
  );
}

export default Search;
