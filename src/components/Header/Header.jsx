import React from "react";
import { NavLink , Link} from "react-router-dom";
import s from "./Header.module.css"
import logo from "../../images/logo.svg"
import arrow_down from "../../images/icon-arrow-down.svg"
import arrow_up from "../../images/icon-arrow-up.svg"
// -----Icons dropdown-----
import icon1 from "../../images/icon-todo.svg"
import icon2 from "../../images/icon-calendar.svg"
import icon3 from "../../images/icon-reminders.svg"
import icon4 from "../../images/icon-planning.svg"



export default function Header() {
  return (
    <>
      <header>
        <section className={s.header_cont}>
          <section className={s.logo_nav}>

            <NavLink className={s.logo} to="/"><img src={logo} /></NavLink>

            {/*-----dropdown-----*/}
            <nav>
              <Link to="#" className={s.link_icon}>
                <span>Features</span>
                <img className={s.drop_icon} src={arrow_down} />
                <section className={s.dropdown}>
                  <Link className={s.drop_list} to="#">
                    <img src={icon1} />
                    Todo List
                  </Link>
                  <Link className={s.drop_list} to="#">
                    <img src={icon2} />
                    Calendar
                  </Link>
                  <Link className={s.drop_list} to="#">
                    <img src={icon3} />
                    Reminders
                  </Link>
                  <Link className={s.drop_list} to="#">
                    <img src={icon4} />
                    Planning
                  </Link>
                </section>
              </Link>
              <Link to="#" className={s.link_icon}>
                <span>Company</span>
                <img className={s.drop_icon} src={arrow_down} />
              </Link>
            {/*-------------------*/}
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