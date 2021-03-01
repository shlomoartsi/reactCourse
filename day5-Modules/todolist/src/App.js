//import {createElement} from "react"

import { useState } from "react"; //cause the local variables to be saved for the next execution
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
/*function App() {
  // return createElement('h1',{},['HI']);
  const myName = "Shlomi";
  const placeHolder = "type something in here";
  const names = ['Yossi','Dan','Moshe'];
  //this function returns array with 2 elements which is
  //distructed into two variables called names and setNames
  const [names,setNames] = useState([]);

  function addItem(){
    //the ...names - is spreading the elements to new array
    //[...names,'new items'] - creates new array adding 'new items'
    setNames([...names,'new items'])
  }

  return (
    <div>
    <h1>{myName}</h1>
    <input placeholder={placeHolder}/>
    <button onClick={addItem}>button</button>
    <ul>
      {names.map(name => <li>{name}</li> )}
    </ul>
    </div>
  );
}*/

function App() {
  //  const [count, setCount] = useState(0);

  return (
    <section className="todoapp">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default App;
