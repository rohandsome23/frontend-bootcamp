import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <small>© {new Date().getFullYear()} MyStream — Made with ❤️</small>
          <nav aria-label="Footer links">
            <ul className="footer-links">
              <li><a href="#help">Help</a></li>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#terms">Terms</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}