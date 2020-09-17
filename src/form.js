import React from "react";

function InputForm({ setInput, setInput2, }) {


    const handleSubmit = (event) => {
        event.preventDefault();
        setInput(event.target.elements.hero1.value);
        setInput2(event.target.elements.hero2.value)
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h2>Hero's fight!!</h2>
                <label htmlFor="herosName">
                    Enter your favorite hero's name
                    <input
                        id="herosName"
                        name="hero1"
                    />
                    <input
                        id="herosName"
                        name="hero2"
                    />
                </label>
                <button type="submit" className="form__button">
                    Submit
                </button>
            </form>
        </section>
    );
}

export default InputForm;