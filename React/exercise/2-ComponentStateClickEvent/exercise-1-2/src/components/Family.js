import React from "react";
import Person from "./Person";
import "../style/Family.css";

const Family = (props) => {
  return (
    <div className="Family">
      <h3>Family</h3>
      {props.people.map((person) => (
        <Person name={person.name} age={person.age} />
      ))}
    </div>
  );
};
export default Family;
