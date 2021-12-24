import React, { useEffect } from "react";
import Particles from "./components/layouts/Particles";
import Header from "./components/section/Header";
import About from "./components/section/About";
import Works from "./components/section/Works";
import Contact from "./components/section/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { animation } from "./profile";
import { contact, section5Title, social } from './profile'
function App() {
  const scrollTo = () => {
    window.scrollTo({
        top: 100000,
        left: 0,
        behavior: "smooth"
    })
} 
  useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      
      <Header />
      <Particles />
      <About />
      <Works />
      {/* <img id="not-dark" onClick={scrollTo} alt="Contact Me" title="Contact Me" className="gtp" src="profile.png"></img> */}
      <Contact />
      {/* <p id="not-dark" className="Copy">2021 © Copyright <strong>{contact.copyright}</strong>. All Rights Reserved</p> */}
    </div>
  );
}

export default App;
