import React from "react";

function InputForm({ setInput, setInput2, }) {


    const handleSubmit = (event) => {
        event.preventDefault();
        setInput(event.target.elements.hero1.value);
        setInput2(event.target.elements.hero2.value)
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h2>Hero's fight!!</h2>
                <label htmlFor="herosName1">
                    Player 1
                    <input
                        id="herosName1"
                        name="hero1"
                        placeholder="Enter a hero's name"
                    /></label>
                <label htmlFor="herosName2">
                    Player 2
                    <input
                        id="herosName2"
                        name="hero2"
                        placeholder="Enter a hero's name"
                    />
                </label>
                <button type="submit" className="form__button">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default InputForm;