import React from "react";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Gallery from "../../components/gallery/Gallery";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";

function Home() {
  return (
    <div>
      <Hero id="hero" />
      <About id="about" />
      <Gallery id="gallery" />
      <Services id="services" />
      <Contact id="Contact" />
    </div>
  );
}

export default Home;
