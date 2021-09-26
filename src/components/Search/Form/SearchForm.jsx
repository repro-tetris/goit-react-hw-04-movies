import React from "react";

function SearchForm({ onSubmit }) {
  const formSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.searchStr.value);
    e.target.searchStr.value = "";
  };
  return (
    <form onSubmit={formSubmit}>
      <input name="searchStr" type="text"></input>
      <button type="submit"> search</button>
    </form>
  );
}

export default SearchForm;
