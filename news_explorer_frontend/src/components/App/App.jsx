import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLoginClick = () => setActiveModal("login");
  const handleRegisterClick = () => setActiveModal("register");
  const closeActiveModal = () => setActiveModal("");

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentUser({ name: "Delmas" });
    closeActiveModal();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const handleSearch = (query) => {
    setIsLoading(true);
    setHasSearched(true);

    setTimeout(() => {
      setArticles([
        {
          title: `Result for "${query}"`,
          text: "This is a sample article about the topic you searched for.",
          image: "https://via.placeholder.com/400x240",
        },
        {
          title: `Another result for "${query}"`,
          text: "More sample content to show how cards render dynamically.",
          image: "https://via.placeholder.com/400x240",
        },
        {
          title: `More news about "${query}"`,
          text: "This card helps test the Show More button.",
          image: "https://via.placeholder.com/400x240",
        },
        {
          title: `Latest update on "${query}"`,
          text: "Another sample article for the search results section.",
          image: "https://via.placeholder.com/400x240",
        },
      ]);

      setIsLoading(false);
    }, 1500);
  };

  const handleSaveArticle = (article) => {
    if (!isLoggedIn) {
      handleLoginClick();
      return;
    }

    setSavedArticles((prevArticles) => [...prevArticles, article]);
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
            />
          }
        />

        <Route
          path="/saved-news"
          element={<SavedNews savedArticles={savedArticles} />}
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
