import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© 2026 NewsExplorer</p>

      <div className="footer__links">
        <a href="/">Home</a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
