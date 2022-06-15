import React, { useState } from "react";
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
      <span className="drop_list">
        <img src={icon1} alt="img"/>
        Todo List
      </span>
      <span className="drop_list">
        <img src={icon2} alt="img"/>
        Calendar
      </span>
      <span className="drop_list">
        <img src={icon3} alt="img"/>
        Reminders
       </span>
      <span className="drop_list">
        <img src={icon4} alt="img"/>
        Planning
      </span>
    </section>
  )
}

export default DropDown;