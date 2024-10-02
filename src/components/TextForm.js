import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");
    // text="new text";    // Wrong way to change the state
    // setText("new text");    // Correct way to change the state

    const handleUpClick = () => {
        setText(text.toUpperCase());
    };

    const handleLowClick = () => {
        setText(text.toLowerCase());
    };

    const handleClearClick = () => {
        setText("");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    };

    const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
    }

    const textareaStyle = {
        backgroundColor: props.mode === "dark" ? "#6c757d" : "white", // Gray for dark mode, white for light mode
        color: props.mode === "dark" ? "white" : "black",
        border: props.mode === "dark" ? "1px solid #6c757d" : "1px solid black" // Border color to match background
    };

    return (
        <>
        <div className="container">
            <h2>{props.heading} </h2>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    id="myBox"
                    rows="7"
                    value={text}
                    style={textareaStyle}
                    onChange={handleOnChange}
                ></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleSpeak} >Text to Speech</button>
            <button className="btn btn-primary mx-1" onClick={handleCapitalize} >Capitalise</button>
            <button className="btn btn-primary mx-1" onClick={copyText} >Copy</button>


        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>

            <h3>Preview</h3>
            <p>{text.length === 0 ? "Enter something above to preview" : text}</p>
            <br /><br />
        </div>
        </>
    );
}
