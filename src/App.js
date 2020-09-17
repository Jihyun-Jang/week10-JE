import React from "react";
import testApi from "./utils/api.js";
import Card from "./card.js"
import InputForm from "./form.js"
import Randomis from "./utils/randomise.js"
import "./App.css";
//import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants"; //???

// const H3tag ({name,comics,id})=> {
// }

function App() {
  // if ouput = "" display form if not display card 
  const [output, setOutput] = React.useState("");


  return (
    <div className="App">
      <InputForm output={output} setOutput={setOutput} />

      <Card output={output} />
      <Randomis />
    </div>
  );
}

export default App;
