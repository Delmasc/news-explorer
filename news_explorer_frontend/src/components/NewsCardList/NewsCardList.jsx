import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({
  articles,
  searchError,
  onSaveArticle,
  isLoggedIn,
  savedArticles,
}) {
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleArticles = articles.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <section className="cards">
      <h2 className="cards__title card__search-title" >
        Search results
      </h2>

      {searchError && (
        <p className="cards__error">
          Sorry, something went wrong during the request. Please try again
          later.
        </p>
      )}

      {!searchError && articles.length === 0 && (
        <p className="cards__error">Nothing found</p>
      )}

      {!searchError && articles.length > 0 && (
        <>
          <div className="cards__list">
            {visibleArticles.map((item, index) => {
              const isSaved = savedArticles.some(
                (savedArticle) => savedArticle.url === item.url,
              );

              return (
                <NewsCard
                  key={index}
                  card={item}
                  isLoggedIn={isLoggedIn}
                  isSaved={isSaved}
                  onSaveArticle={onSaveArticle}
                />
              );
            })}
          </div>

          {visibleCount < articles.length && (
            <button
              className="cards__more-button"
              type="button"
              onClick={handleShowMore}
            >
              Show more
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default NewsCardList;
