import React from "react";
function Randomise() {
    const random1 = Math.floor(Math.random() * 10);
    const random2 = Math.floor(Math.random() * 10);
    return (<div>{`${random1}  vs   ${random2}`}</div>)
}


export default Randomise;