import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Header.module.css"
import logo from "../../images/logo.svg"
import arrow_down from "../../images/icon-arrow-down.svg"
import arrow_up from "../../images/icon-arrow-up.svg"

export default function Header() {
  return (
    <>
      <header>
        <section className={s.header_cont}>
          <section className={s.logo_nav}>
            <NavLink className={s.logo} to="/"><img src={logo} /></NavLink>
            <nav>
              <div className={s.link_icon}>
                <span>Features</span>
                <img src={arrow_down} />
              </div>
              <div className={s.link_icon}>
                <span>Company</span>
                <img src={arrow_down} />
              </div>
              <NavLink className={s.navlink} to="./">
                <span>Careers</span>
              </NavLink>
              <NavLink className={s.navlink} to="./">
                <span>About</span>
              </NavLink>
            </nav>
          </section>
          
          <section className={s.log_reg}>
            <NavLink className={s.log} to="/">
              <span>Login</span>
            </NavLink>

            <NavLink className={s.reg} to="/">
              <span>Register</span>
            </NavLink>
          </section>
        </section>
      </header>
    </>
  )
}