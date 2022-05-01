import React from "react";
import s from "./Main.module.css";
import hero from "../../images/image-hero-desktop.png";

export default function Main() {
  return (
    <>
      <main>
        <section>
          <h1>Make remote work</h1>
          <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <span className={s.learn}>Learn more</span>
          <section>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </section>
        </section>

        <section>
          <img className={s.hero} src={hero} alt="hero" />
        </section>
      </main>
    </>
  )
}