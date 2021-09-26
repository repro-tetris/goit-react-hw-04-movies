import React from "react";
import s from "./SearchForm.module.css";

function SearchForm({ onSubmit }) {
  const formSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.searchStr.value);
    e.target.searchStr.value = "";
  };
  return (
    <form className={s.form} onSubmit={formSubmit}>
      <input name="searchStr" type="text"></input>
      <button className={s.btn} type="submit">
        search
      </button>
    </form>
  );
}

export default SearchForm;
