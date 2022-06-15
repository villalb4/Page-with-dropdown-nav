import React, { useState } from "react";
import { NavLink , Link} from "react-router-dom";
import s from "./Header.module.css"
import logo from "../../images/logo.svg"
import arrow_down from "../../images/icon-arrow-down.svg"
import DropDown from "./DropDown/DropDown"


export default function Header() {

  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <header>
        <section className={s.header_cont}>
          <section className={s.logo_nav}>

            <NavLink className={s.logo} to="/"><img src={logo} alt="img"/></NavLink>

            {/*-----dropdown-----*/}
            <nav>
              <Link to="#" 
                className={s.link_icon} 
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <span>Features</span>
                <img className={s.drop_icon} src={arrow_down} alt="img"/>
                {dropdown && <DropDown/>}
                
              </Link>

              <Link to="#" className={s.link_icon}>
                <span>Company</span>
                <img className={s.drop_icon} src={arrow_down} alt="img"/>
              </Link>
            {/*-------------------*/}
              <NavLink className={s.navlink} to="#">
                <span>Careers</span>
              </NavLink>
              <NavLink className={s.navlink} to="#">
                <span>About</span>
              </NavLink>
            </nav>
          </section>
          
          <section className={s.log_reg}>
            <NavLink className={s.log} to="#">
              <span>Login</span>
            </NavLink>

            <NavLink className={s.reg} to="#">
              <span>Register</span>
            </NavLink>
          </section>
        </section>
      </header>
    </>
  )
}