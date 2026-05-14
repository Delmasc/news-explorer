import "./NewsCard.css";

function NewsCard({
  card,
  isLoggedIn,
  isSaved,
  isSavedPage,
  onSaveArticle,
  onDeleteArticle,
}) {
  const image = card.urlToImage || card.image || "/placeholder-news.png";
  const description = card.description || card.text;
  const sourceName = card.source?.name || card.source || "";
  const date = card.publishedAt || card.date;

  return (
    <article className="card">
      {isSavedPage && <span className="card__keyword">{card.keyword}</span>}

      {isSavedPage ? (
        <div className="card__save-container">
          <button
            className="card__icon-button card__delete-button"
            type="button"
            onClick={() => onDeleteArticle(card)}
            aria-label="Delete article"
          />
        </div>
      ) : (
        <div className="card__save-container">
          {!isLoggedIn && (
            <span className="card__tooltip">Sign in to save articles</span>
          )}

          <button
            className={`card__icon-button card__bookmark-button ${
              isSaved ? "card__bookmark-button_saved" : ""
            }`}
            type="button"
            onClick={() => onSaveArticle(card)}
            aria-label="Save article"
          />
        </div>
      )}

      <a
        href={card.url}
        target="_blank"
        rel="noopener noreferrer"
        className="card__link"
      >
        <img className="card__image" src={image} alt={card.title || "News"} />

        <div className="card__content">
          <p className="card__date">
            {date ? new Date(date).toLocaleDateString() : ""}
          </p>

          <h3 className="card__title">{card.title}</h3>

          <p className="card__text">{description}</p>

          <p className="card__source">{sourceName}</p>
        </div>
      </a>
    </article>
  );
}

export default NewsCard;
