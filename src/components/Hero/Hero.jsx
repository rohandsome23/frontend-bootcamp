import React from "react";
import "./hero.css"
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Unlimited movies, TV shows and more. </h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="hero-form">
          <input type="email" placeholder="Email address"/>
          <button>Get Started</button>
        </div>
      </div>
      <section className="rows">
        <h3>Popular on Netflix</h3>
        <div className="row">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        </div>
        <h3>Trending Now</h3>
        <div className="row">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        </div>
        </section>
    </section>

  );
}