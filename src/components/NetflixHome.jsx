import React from "react";

function Row({ title, items = [] }) {
  return (
    <section className="row container" aria-label={title}>
      <h3 className="row-title">{title}</h3>
      <div className="row-items">
        {items.map((t, i) => (
          <div key={t + i} className="card">
            <div className="card-thumb" />
            <div className="card-title">{t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function NetflixHome() {
  const sample = [
    "Show 1", "Show 2", "Show 3", "Show 4",
    "Show 5", "Show 6", "Show 7", "Show 8"
  ];

  return (
    <div className="netflix-home">
      <Row title="Popular on MyStream" items={sample} />
      <Row title="Trending Now" items={sample} />
      <Row title="Because you watched" items={sample} />
    </div>
  );
}