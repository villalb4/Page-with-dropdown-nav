import React, { useState } from "react";
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

            <span className={s.logo}><img src={logo} alt="img"/></span>

            {/*-----dropdown-----*/}
            <nav>
              <span 
                className={s.link_icon} 
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <span>Features</span>
                <img className={s.drop_icon} src={arrow_down} alt="img"/>
                {dropdown && <DropDown/>}
                
              </span>

              <span className={s.link_icon}>
                <span>Company</span>
                <img className={s.drop_icon} src={arrow_down} alt="img"/>
              </span>
            {/*-------------------*/}
              <span className={s.navlink} >
                <span>Careers</span>
              </span>
              <span className={s.navlink}>
                <span>About</span>
              </span>
            </nav>
          </section>
          
          <section className={s.log_reg}>
            <span className={s.log}>
              <span>Login</span>
            </span>

            <span className={s.reg}>
              <span>Register</span>
            </span>
          </section>
        </section>
      </header>
    </>
  )
}