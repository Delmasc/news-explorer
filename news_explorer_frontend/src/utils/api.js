export const getSavedArticles = () => {
  return Promise.resolve([]);
};

export const saveArticle = (article) => {
  return Promise.resolve({
    ...article,
    _id: Date.now().toString(),
  });
};

export const deleteArticle = (articleId) => {
  return Promise.resolve({ message: "Article deleted", articleId });
};
