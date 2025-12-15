import React from "react";

const features = [
  { title: "Responsive", text: "Grid and Flex layouts for all screens." },
  { title: "Modern CSS", text: "CSS variables, rem/em units, and grid." },
  { title: "Componentized", text: "Small React components ready to reuse." },
];

export default function Features() {
  return (
    <section className="features container" role="region" aria-label="Features">
      <h2 className="sr-only">Features</h2>
      <div className="features-grid">
        {features.map((f) => (
          <article key={f.title} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}