import React from "react";
//import testApi from "./utils/api.js";
import Card from "./card.js"
import InputForm from "./form.js"
import Randomise from "./utils/randomise.js"
import "./App.css";



function App() {
  //const [output, setOutput] = React.useState("");
  const [input, setInput] = React.useState("");
  const [input2, setInput2] = React.useState("");

  if (!input && !input2) {
    return <InputForm setInput={setInput} setInput2={setInput2} className="inputform" />;
  }
  return (
    <div className="App">
      <div className="btnCont">
        <div className="hero-container">
          <Card heroName={input} />
          <Card heroName={input2} />
        </div>
        <button className="fightBtn">Fight</button>
      </div>
      <Randomise />
    </div>
  );
}

export default App;
