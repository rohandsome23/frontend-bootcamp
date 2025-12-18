import React from "react";

// const features = [
//   { title: "Responsive", text: "Grid and Flex layouts for all screens." },
//   { title: "Modern CSS", text: "CSS variables, rem/em units, and grid." },
//   { title: "Componentized", text: "Small React components ready to reuse." },
// ];

// export default function Features() {
//   return (
//     <section className="features container" role="region" aria-label="Features">
//       <h2 className="sr-only">Features</h2>
//       <div className="features-grid">
//         {features.map((f) => (
//           <article key={f.title} className="feature-card">
//             <h3>{f.title}</h3>
//             <p>{f.text}</p>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }
export default function Features(){
<section class="features">
    <div class="feature">
        <h2>Enjoy on your TV</h2>
        <p>Watch on smart TVs, Playstation, Xbox, Chromeset, Apple TV, and more.</p>
        </div>
    <div class="feature">
        <h2>Download your shows</h2>
        <p> Save your favorites easily and always have something to watch.</p>
    </div>
    <div class="feature">
        <h2>Watch everywhere</h2>
        <p> Stream unlimited movies and TV showson your phone, tablet, laptop.</p>
        </div>
        </section>
}