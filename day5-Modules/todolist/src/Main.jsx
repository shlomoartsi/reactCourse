import { React } from "react";

function Main() {
    return (
        <section className="main">
        <input className="toggle-all" type="checkbox" id="toggleCheckbox" />
        <ul className="todo-list" id="ulTodo">
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>My task </label>
              <button className="destroy" />
            </div>
            <input className="edit" />
          </li>
        </ul>
      </section>
    )
}

export default Main;