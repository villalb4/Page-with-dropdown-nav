import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css"
import logo from "../../images/logo.svg"
import arrow_down from "../../images/icon-arrow-down.svg"
import arrow_up from "../../images/icon-arrow-up.svg"

export default function Header() {
  return (
    <>
      <header>
        <section className="header-cont">
          <section className="logo-nav">
            <NavLink className="logo" to="/"><img src={logo} /></NavLink>
            <nav>
              <div className="link-icon">
                <span>Features</span>
                <img src={arrow_down} />
              </div>
              <div className="link-icon">
                <span>Company</span>
                <img src={arrow_down} />
              </div>
              <NavLink className="navlink" to="./">
                <span>Careers</span>
              </NavLink>
              <NavLink className="navlink" to="./">
                <span>About</span>
              </NavLink>
            </nav>
          </section>
          
          <section className="log-reg">
            <NavLink className="log" to="/">
              <span>Login</span>
            </NavLink>

            <NavLink className="reg" to="/">
              <span>Register</span>
            </NavLink>
          </section>
        </section>
      </header>
    </>
  )
}