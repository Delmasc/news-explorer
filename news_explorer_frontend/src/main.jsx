import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/news-explorer">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
