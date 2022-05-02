import React from "react";
import {Link} from "react-router-dom";
import s from "./Main.module.css";
import hero from "../../images/image-hero-desktop.png";
import databiz from "../../images/client-databiz.svg";
import audiophile from "../../images/client-audiophile.svg";
import meet from "../../images/client-meet.svg";
import maker from "../../images/client-maker.svg";

export default function Main() {
  return (
    <>
      <main>
        <section>
          <h1>Make remote work</h1>
          <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <Link className={s.learn_link} to="/">Learn more</Link>
          <section className={s.logos}>
            <div>
              <img src={databiz} />
            </div>
            <div>
              <img src={audiophile} />
            </div>
            <div>
              <img src={meet} /> 
            </div>
            <div>
              <img src={maker} />
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