import React, { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Navigation from './components/Navigation';
import Team from "./components/Team";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import ContactInfoRow from "./components/ContactInfoRow";
function App() {
  
  useEffect(() => { 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const hero = document.querySelector("header.hero");
    const sections = document.querySelectorAll("section");

    hero && observer.observe(hero);
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation />   

      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Team />
      <Profile />
      <Contact />
      <ContactInfoRow />
      <Footer />
    </>
  );
}

export default App;
