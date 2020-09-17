import React from "react";
//import testApi from "./utils/api.js";
import Card from "./card.js"
import InputForm from "./form.js"
// import randomise from "./utils/randomise.js"
import "./App.css";



function App() {
  //const [output, setOutput] = React.useState("");
  const [input, setInput] = React.useState("");
  const [input2, setInput2] = React.useState("");
  const [score, setScore] = React.useState(0);
  const [score2, setScore2] = React.useState(0);
  const [winner, setWinner] = React.useState(null);




  if (!input && !input2) {
    return <InputForm setInput={setInput} setInput2={setInput2} className="inputform" />;
  }
  function compare(score, score2) {

    if (score > score2) {
      setWinner("Player 1")

    } else {
      setWinner("Player 2")
    }

  }


  return (
    <div className="App">
      <div className="btnCont">
        <div className="hero-container">
          {(!winner) ?
            <>
              <div className="cards">
                <Card heroName={input} headingName={"PLAYER 1"} setScore={setScore} />
                <Card heroName={input2} headingName={"PLAYER 2"} setScore={setScore2} />
              </div>
              <button className="fightBtn" onClick={() => {
                compare(score, score2);
              }
              }
              > Fight</button>
            </>
            :
            <div>{winner} win!
            <p>{`Player 1 :${score} - Player 2 :${score2}`}</p>
              <button
                className="resetBtn"
                onClick={() => {
                  setInput("");
                  setInput2("");
                  setScore(0);
                  setScore2(0);
                  setWinner(null);
                }}

              >RESET</button>
            </div>}
        </div>


        {/* <button className="rdmFightBtn" onClick={randomise}>Random Fight</button> */}
      </div>
    </div>
  );
}

export default App;
