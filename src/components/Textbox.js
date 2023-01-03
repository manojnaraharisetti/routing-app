import React, { useState } from "react";

export default function Textbox(props) {
  const [text, setText] = useState("");

  const handleupClick = () => {
    // console.log("Uppercase was clicked : " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleupClick1 = () => {
    // console.log("Uppercase was clicked : " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clear = () => {
    // console.log("Uppercase was clicked : " + text);
    setText("");
  };

  const copytoclipboard = () => {
    navigator.clipboard.writeText(text);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          placeholder="Enter text here...."
        ></textarea>
      </div>

      <button className=" kl" onClick={handleupClick}>
        Convert to upperCase
      </button>
      <button className=" btn btn-primary mx-2" onClick={handleupClick1}>
        Convert to Lowercase
      </button>
      <button className=" btn btn-primary mx-2" onClick={clear}>
        Clear
      </button>
      <button className=" btn btn-primary mx-2" onClick={copytoclipboard}>
        copytoclipboard
      </button>
      <div className="container my-4">
        <h1>Text summary :</h1>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          Read time for all the words is : {0.008 * text.split(" ").length}{" "}
          minutes
        </p>
      </div>
      <div className="conatiner my-4">
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
