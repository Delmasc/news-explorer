import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

function SavedNews({ savedArticles }) {
  const userName = "Delmas";

  return (
    <section className="saved-news">
      <p className="saved-news__subtitle">Saved articles</p>

      <h1 className="saved-news__title">
        {userName}, you have {savedArticles.length} saved articles
      </h1>

      <div className="saved-news__list">
        {savedArticles.length > 0 ? (
          savedArticles.map((article, index) => (
            <NewsCard key={index} card={article} />
          ))
        ) : (
          <p className="saved-news__empty">No saved articles yet</p>
        )}
      </div>
    </section>
  );
}

export default SavedNews;
