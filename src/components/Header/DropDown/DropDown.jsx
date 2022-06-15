import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Drop.css";
// -----Icons dropdown-----
import icon1 from "../../../images/icon-todo.svg"
import icon2 from "../../../images/icon-calendar.svg"
import icon3 from "../../../images/icon-reminders.svg"
import icon4 from "../../../images/icon-planning.svg"

function DropDown() {
  const [drop, setDrop] = useState(false)

  return (
    <section 
      className={drop ? "dropdown" : "dropdown off"}
      onClick={() => setDrop(!drop)}
    >
      <Link className="drop_list" to="#">
        <img src={icon1} alt="img"/>
        Todo List
      </Link>
      <Link className="drop_list" to="#">
        <img src={icon2} alt="img"/>
        Calendar
      </Link>
      <Link className="drop_list" to="#">
        <img src={icon3} alt="img"/>
        Reminders
       </Link>
      <Link className="drop_list" to="#">
        <img src={icon4} alt="img"/>
        Planning
      </Link>
    </section>
  )
}

export default DropDown;