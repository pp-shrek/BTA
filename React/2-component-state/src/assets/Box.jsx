import React from "react";
import { useState } from "react";

const Box = (props) => {
    const [bgColor, setBgColor] = useState("green");
    const customStyle = {
        background: bgColor,
      };

    const hideButton = () => {
        console.log(`hei`);
        setBgColor("red");
    };

    return (
        <div style={customStyle} className="box" onClick={hideButton}>
            <p>{props.name}</p>
        </div>
    );
};

export default Box;