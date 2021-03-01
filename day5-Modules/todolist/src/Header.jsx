import { useState } from "react"; 

function Header() {
    //  const [count, setCount] = useState(0);
  
    return (
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            id="todoInput"
          />
        </header>);
}
export default Header;
  