import React from "react";
import "./hero.css"
export default function Hero() {
  return (
    //  <section className="hero container" id="home" role="region" aria-label="Hero">
    //    <div className="hero-inner">
    //      <h1 className="hero-title">Stream what you love. Anytime.</h1>
    //      <p className="hero-sub">
    //        Lightweight static demo — learn modern CSS layout and responsive design.
    //      </p>
    //      <div className="hero-ctas">
    //        <button className="btn btn-primary">Get Started</button>
    //        <button className="btn btn-outline">Learn More</button>
    //      </div>
    //    </div>
    //    <div className="hero-visual" aria-hidden="true" />
    // </section>
    <section class="hero">
      <div calss="hero-content">
        <h1>Unlimited movies, TV shows and more. </h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div class="hero-form">
          <input type="email" placeholder="Email address"/>
          <button>Get Started</button>
        </div>
      </div>
      <section class="rows">
        <h3>Popular on Netflix</h3>
        <div class="row">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        </div>
        <h3>Trending Now</h3>
        <div class="row">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        </div>
        </section>
    </section>

  );
}