import React from 'react' 
import Hero from "../components/hero/Hero"
import About from "../components/about/About"
import Gallery from "../components/gallery/Gallery"
import Services from "../components/services/Services"
import Contact from "../components/contact/Contact"

function Home() {
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