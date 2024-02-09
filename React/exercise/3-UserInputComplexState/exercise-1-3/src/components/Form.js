import React, { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");
  const [headingText, setHeading] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleClick = (e) => {
    setHeading(text);
    setText("");
    e.preventDefault();
  };

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="some text"
          value={text}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
