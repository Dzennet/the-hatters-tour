import React from "react";
import AboutSection from "../../components/AboutSection/AboutSection";
import c from "./About.module.css";

function About() {
  return (
    <section className={c.about}>
      <AboutSection />
    </section>
  );
}

export default About;
