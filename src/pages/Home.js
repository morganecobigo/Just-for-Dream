import React from "react"; 
import Hero from "../../src/components/hero/Hero";
import About from "../../src/components/about/About";
import Gallery from "../../src/components/gallery/Gallery";
import Services from "../../src/components/services/Services";
import Contact from "../../src/components/contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero id="hero" />
      <About id="about" />
      <Gallery id="gallery" />
      <Services id="services" />
      <Contact id="contact" />
    </div>
  );
};

export default Home;
