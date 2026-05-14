import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!keyword.trim()) {
      setError("Please enter a keyword");
      return;
    }

    setError("");
    onSearch(keyword);
  }

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
            className="search-form__input"
            type="text"
            placeholder="Enter topic"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              setError("");
            }}
          />

          <button className="search-form__button" type="submit">
            Search
          </button>
        </div>

        {error && <span className="search-form__error">{error}</span>}
      </form>
    </section>
  );
}

export default SearchForm;
