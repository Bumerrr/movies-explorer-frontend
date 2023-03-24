import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__form-main">
          <input
            type="text"
            name="search"
            placeholder="Фильм"
            className="search__form-input"
            required
          />
          <button
            className="search__form-button search__form-button_type_find"
            type="submit"
          ></button>
        </div>
        <div className="search__toggle-wrapper">
          <label className="search__toggle-text">Короткометражки</label>
          <input className="search__toggle" type="checkbox" />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;