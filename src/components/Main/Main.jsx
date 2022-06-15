import React from "react";
import s from "./Main.module.css";
import hero from "../../images/image-hero-desktop.png";
import databiz from "../../images/client-databiz.svg";
import audiophile from "../../images/client-audiophile.svg";
import meet from "../../images/client-meet.svg";
import maker from "../../images/client-maker.svg";

function Main() {
  return (
    <>
      <main>
        <section>
          <h1>Make remote work</h1>
          <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <span className={s.learn_link}>Learn more</span>
          <section className={s.logos}>
            <div>
              <img src={databiz} alt="img"/>
            </div>
            <div>
              <img src={audiophile} alt="img"/>
            </div>
            <div>
              <img src={meet} alt="img"/> 
            </div>
            <div>
              <img src={maker} alt="img"/>
            </div>
          </section>
        </section>

        <section>
          <img className={s.hero} src={hero} alt="hero" />
        </section>
      </main>
    </>
  )
}

export default Main