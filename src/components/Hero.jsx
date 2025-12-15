import React from "react";

export default function Hero() {
  return (
    <section className="hero container" id="home" role="region" aria-label="Hero">
      <div className="hero-inner">
        <h1 className="hero-title">Stream what you love. Anytime.</h1>
        <p className="hero-sub">
          Lightweight static demo — learn modern CSS layout and responsive design.
        </p>
        <div className="hero-ctas">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-outline">Learn More</button>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true" />
    </section>
  );
}