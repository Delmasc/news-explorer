import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2026 Supersite, Powered by News API</p>

      <div className="footer__links">
        <a className="footer__link" href="/">
          Home
        </a>

        <a
          className="footer__link"
          href="https://tripleten.com"
          target="_blank"
          rel="noreferrer"
        >
          TripleTen
        </a>

        <a
          className="footer__icon-link"
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/github.svg" alt="GitHub" className="footer__icon" />
        </a>

        <a
          className="footer__icon-link"
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/linked-in.svg" alt="LinkedIn" className="footer__icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
