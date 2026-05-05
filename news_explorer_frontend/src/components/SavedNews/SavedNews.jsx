import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

function SavedNews({ savedArticles, onDeleteArticle, currentUser }) {
  const keywords = savedArticles
    .map((article) => article.keyword)
    .filter(Boolean);

  const uniqueKeywords = [...new Set(keywords)];

  const displayedKeywords =
    uniqueKeywords.length <= 2
      ? uniqueKeywords.join(", ")
      : `${uniqueKeywords[0]}, ${uniqueKeywords[1]}, and ${
          uniqueKeywords.length - 2
        } other`;

  return (
    <main className="saved-news">
      <section className="saved-news__header">
        <p className="saved-news__label">Saved articles</p>

        <h1 className="saved-news__title">
          {currentUser?.name || "User"}, you have {savedArticles.length} saved
          articles
        </h1>

        <p className="saved-news__keywords">
          By keywords: <strong>{displayedKeywords}</strong>
        </p>
      </section>

      <section className="saved-news__cards">
        <div className="saved-news__card-list">
          {savedArticles.map((article, index) => (
            <NewsCard
              key={index}
              card={article}
              isSavedPage={true}
              onDeleteArticle={onDeleteArticle}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default SavedNews;
