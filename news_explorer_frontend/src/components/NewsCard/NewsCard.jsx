import "./NewsCard.css";

function NewsCard({ card, onSaveArticle }) {
  return (
    <article className="card">
      <img className="card__image" src={card.image} alt={card.title} />

      <div className="card__content">
        <h3 className="card__title">{card.title}</h3>
        <p className="card__text">{card.text}</p>

        {onSaveArticle && (
          <button
            className="card__save-button"
            type="button"
            onClick={() => onSaveArticle(card)}
          >
            Save
          </button>
        )}
      </div>
    </article>
  );
}

export default NewsCard;
