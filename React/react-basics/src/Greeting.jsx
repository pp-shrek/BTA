import React from "react";

const Greeting = (props) => {
    const fullName = props.fullName;
    const age = props.age;
    return (
      <h2>My name is {fullName} and I am {age} years old!</h2>
    )
};

export default Greeting;