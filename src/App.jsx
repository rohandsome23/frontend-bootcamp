import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Feature/Features";
import NetflixHome from "./components/NetflixHome";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="app-root">
      <Header />

      <main>
        <Hero />
        <Features />
        {/* <NetflixHome /> */}
      </main>
 
      <Footer /> 
    </div>
  );
}