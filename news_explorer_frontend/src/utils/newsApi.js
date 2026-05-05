const API_KEY = "5e74ab416b074a6caf67117730bce4cf";

const newsApiBaseUrl =
  import.meta.env.MODE === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

function getDate(daysAgo = 0) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split("T")[0];
}

export function searchNews(query) {
  const from = getDate(7);
  const to = getDate();

  return fetch(
    `${newsApiBaseUrl}?q=${query}&apiKey=${API_KEY}&from=${from}&to=${to}&pageSize=100`,
  ).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }

    return res.json();
  });
}
