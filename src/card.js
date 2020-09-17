import React from "react";
import "./App.css";
import testApi from "./utils/api.js";
// import svg from "/public/icons8-captain-america.svg"

function Card({ heroName, headingName, setScore }) {
    // const [text, setText] = React.useState("");
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const hero = heroName;
        testApi(hero).then((data) => {
            setData(data)
            setScore(data.data.results[0].comics.available)
        });
    }, [heroName, setScore]);
    if (!data) return (
        <div>
            <img src="logo.svg" alt="loadingImg" className="avenger" />
            <h1>....Loading {heroName} </h1>
        </div>)
    const result = data.data.results[0];
    const img = data.data.results[0].thumbnail.path + ".jpg";
    // const score = result.comics.available;



    return (
        <div className="App">
            <header className="App-header">
                <div className="hero">
                    <h1>{headingName}</h1>
                    <img src={img} alt="" id="img-alter"></img>
                    <h2>{result.name}</h2>
                    {/* <h2>Score:{result.comics.available}</h2> */}

                </div>
            </header>
        </div>
    );
}

export default Card;