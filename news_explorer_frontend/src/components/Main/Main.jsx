import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import About from "../About/About";
import "./Main.css";

function Main({
  isLoading,
  articles,
  searchError,
  onSearch,
  hasSearched,
  onSaveArticle,
  isLoggedIn,
  savedArticles,
}) {
  return (
    <main className="main">
      <SearchForm onSearch={onSearch} />

      {isLoading && <Preloader />}

      {!isLoading && articles.length > 0 && (
        <NewsCardList
          articles={articles}
          searchError={searchError}
          onSaveArticle={onSaveArticle}
          isLoggedIn={isLoggedIn}
          savedArticles={savedArticles}
        />
      )}

      {!isLoading && hasSearched && articles.length === 0 && <NothingFound />}

      <About />
    </main>
  );
}

export default Main;
