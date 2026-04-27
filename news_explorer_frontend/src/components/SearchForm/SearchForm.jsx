import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    onSearch(query);
    setQuery("");

    e.currentTarget.querySelector(".search-form__button").blur();
  };

  return (
    <section className="search-form">
      <h1 className="search-form__title">What’s going on in the world?</h1>

      <p className="search-form__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>

      <form className="search-form__form" onSubmit={handleSubmit}>
        <div className="search-form__bar">
          <input
            type="text"
            className="search-form__input"
            placeholder="Enter topic"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button type="submit" className="search-form__button">
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
