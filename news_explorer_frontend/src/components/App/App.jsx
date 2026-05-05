import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { searchNews } from "../../utils/newsApi";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true",
  );
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState(() => {
    const saved = localStorage.getItem("savedArticles");
    return saved ? JSON.parse(saved) : [];
  });
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
  });

  const handleLoginClick = () => setActiveModal("login");
  const handleRegisterClick = () => setActiveModal("register");
  const closeActiveModal = () => setActiveModal("");

  useEffect(() => {
    localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
  }, [savedArticles]);

  const handleLogin = () => {
    const user = { name: "Delmas" };

    setIsLoggedIn(true);
    setCurrentUser(user);

    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(user));

    closeActiveModal();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setSavedArticles([]);

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("savedArticles");
  };

  const handleSearch = (query) => {
    if (!query.trim()) {
      setHasSearched(true);
      setArticles([]);
      return;
    }

    setCurrentKeyword(query);
    setIsLoading(true);
    setHasSearched(true);
    setArticles([]);

    searchNews(query)
      .then((data) => {
        setArticles(data.articles || []);
      })
      .catch((err) => {
        console.error(err);
        setArticles([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSaveArticle = (article) => {
    if (!isLoggedIn) {
      handleLoginClick();
      return;
    }

    const alreadySaved = savedArticles.some(
      (savedArticle) => savedArticle.url === article.url,
    );

    if (alreadySaved) {
      setSavedArticles((prevArticles) =>
        prevArticles.filter((savedArticle) => savedArticle.url !== article.url),
      );
      return;
    }

    setSavedArticles((prevArticles) => [
      ...prevArticles,
      { ...article, keyword: currentKeyword },
    ]);
  };

  const handleDeleteArticle = (articleToDelete) => {
    setSavedArticles((prevArticles) =>
      prevArticles.filter((article) => article.url !== articleToDelete.url),
    );
  };

  return (
    <div className="page">
      <Header
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLoginClick={handleLoginClick}
        onLogout={handleLogout}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              isLoading={isLoading}
              articles={articles}
              onSearch={handleSearch}
              hasSearched={hasSearched}
              onSaveArticle={handleSaveArticle}
              isLoggedIn={isLoggedIn}
              savedArticles={savedArticles}
            />
          }
        />

        <Route
          path="/saved-news"
          element={
            <SavedNews
              savedArticles={savedArticles}
              onDeleteArticle={handleDeleteArticle}
              currentUser={currentUser}
            />
          }
        />
      </Routes>

      <Footer />

      <LoginModal
        isOpen={activeModal === "login"}
        onClose={closeActiveModal}
        onLogin={handleLogin}
        onRegisterClick={handleRegisterClick}
      />

      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={closeActiveModal}
        onLoginClick={handleLoginClick}
      />
    </div>
  );
}

export default App;
