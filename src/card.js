import React from "react";
import "./App.css";
import testApi from "./utils/api.js";

function Card({ heroName }) {
    // const [text, setText] = React.useState("");
    const [data, setData] = React.useState(null);
    // React.useEffect(
    //     //compare function 
    //     //add function to event listener 
    //     //remove event listener 
    // )
    React.useEffect(() => {
        const hero = heroName;
        testApi(hero).then((data) => setData(data));
    }, [heroName]);
    if (!data) return <h1>....Loading {heroName}</h1>
    const result = data.data.results[0];
    const img = data.data.results[0].thumbnail.path + ".jpg";
    // const score = result.comics.available;



    return (
        <div className="App">
            <header className="App-header">
                <div className="">
                    <h1>{result.name}</h1>
                    <h1>Score:{result.comics.available}</h1>
                    <img src={img} alt="" id="img-alter"></img>

                </div>
            </header>
        </div>
    );
}

export default Card;