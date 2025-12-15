import React from "react";
import './header.css'

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="container header-inner">
        <div className="logo" tabIndex="0">MyStream</div>
        <nav className="nav" aria-label="Main navigation">
          <ol>
            <li><a href="#home">Home</a></li>
            <li><a href="#tv">TV Shows</a></li>
            <li><a href="#movies">Movies</a></li>
            <li><a href="#mylist">My List</a></li>
            <li><a href="#choice">My choice</a></li>
          </ol>
        </nav>

        <div className="actions">
          <button className="btn btn-signin">Sign In</button>
        </div>
      </div>
    </header>
  );
}