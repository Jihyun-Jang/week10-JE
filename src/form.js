import React from "react";

function InputForm({ output, setOutput }) {
    const [input, setInput] = React.useState("");
    const [input2, setInput2] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setOutput(input + input2);
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h2>Hero's fight!!</h2>
                <label htmlFor="herosName">
                    Enter your favorite hero's name
                    <input
                        id="herosName"
                        value={input}
                        onChange={(e) => setInput(e.target.value)} />
                    <input
                        id="herosName"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)} />
                </label>
                <button type="submit" className="form__button">
                    Submit
                </button>
            </form>
            {output && <output>{output}</output>}
        </section>
    );
}

export default InputForm;