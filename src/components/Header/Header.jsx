import React from "react";
import './header.css'

export default function Header() {
  return (
    <header class="header">
      <div class="header-left">
        <h3>My Stream</h3>
        {/* <h2>demo</h2>
        <h4>demo 2 </h4> */}
      </div>
      <div class="mid">
        <h4>Home</h4>
        <h4>About us </h4>
        <h4>Contact us</h4>
        <h4>Search</h4>
      </div>
      <div class="last">
         <button>Login</button>
         <button>Sign up</button>

      </div>
    </header>
    // <header className="header" role="banner">
    //   <div className="container header-inner">
    //     <div className="logo" tabIndex="0">MyStream</div>
    //     <nav className="nav" aria-label="Main navigation">
    //       <ol>
            
    //       </ol>
    //     </nav>
    //     <div className="actions">
    //       <button className="btn btn-signin">Sign In</button>
    //     </div>
    //   </div>
    // </header>
  );
}