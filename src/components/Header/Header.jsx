import React from "react";
import './header.css'

export default function Header() {
  return (
    <header className="navbar ">
      <div className="logo">NETFLIX
      </div>
      <div className="navlink">
        
        <a href="#">Home</a>
        <a href="#">TV shows</a>
        <a href="#">Movies</a>
        <a href="#">latest</a>
        <a href="#">My list</a>
        
        </div>
        <div className="right">
        <button>Sign In</button>
        <button>Log In</button>
        </div>
    </header>
    
  );
}
// .navbar{
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 20px 40px;
//     position: fixed;
//     width: 100%;
//     background: rgba(red, green, blue, alpha);
//     z-index: 100;

// }