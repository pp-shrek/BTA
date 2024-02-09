import React from "react";
import "../style/Person.css";

const Person = (props) => {
  return (
    <div className="Person">
      <h4>
        {props.name} is {props.age} eyars old!
      </h4>
    </div>
  );
};
export default Person;
