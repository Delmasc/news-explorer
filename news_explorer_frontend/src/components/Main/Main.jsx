import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import About from "../About/About";

function Main({ isLoading, articles, onSearch, hasSearched, onSavedArticle }) {
  return (
    <main className="main">
      <SearchForm onSearch={onSearch} />

      {isLoading && <Preloader />}

      {!isLoading && articles.length > 0 && (
        <NewsCardList articles={articles} />
      )}

      {!isLoading && hasSearched && articles.length === 0 && <NothingFound />}

      <About />
    </main>
  );
}

export default Main;
