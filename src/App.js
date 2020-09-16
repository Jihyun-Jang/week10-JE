import React from "react";
import testApi from "./utils/api.js";
import "./App.css";
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";

// const H3tag ({name,comics,id})=> {
// }

function App() {
  const [data, setData] = React.useState(null);
  const [text, setText] = React.useState("");
  React.useEffect(() => {
    const hero = "Abyss";
    testApi(hero).then((data) => setData(data));
  }, []);
  if (!data) {
    return <h3>...Loading</h3>;
  }
  const result = data.data.results[0];
  const img = data.data.results[0].thumbnail.path + ".jpg";
  console.log(img);

  return (
    <div className="App">
      <header className="App-header">
        <div className="">
          <h1>name:{result.name}</h1>
          <h1>id:{result.id}</h1>
          <img src={img} alt="" id="img-alter"></img>
          <p>Hello World !!</p>
          <form>
            <label>HERO1</label>
            <input
              type="text"
              id="inputh1"
              value={text}
              onChange={(event) => setText(event.target.value)}
            ></input>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
