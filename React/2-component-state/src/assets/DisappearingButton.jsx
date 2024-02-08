import React from "react";
import {useState } from "react";

const DisappearingButton = (props) => {
    const [isButtonVisible, setButtonVisibility] = useState(true);

    const hideButton = () => {
        console.log(`hei`);
        setButtonVisibility(false);
    };
    return (
        isButtonVisible && <button onClick={hideButton}>Button {props.numb}</button>
    );
};

export default DisappearingButton;