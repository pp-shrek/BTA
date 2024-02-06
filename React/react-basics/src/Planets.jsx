import React from "react";

const Planets = (props) => {
    const planetList = props.planetList;
    // console.log(planetList);
    return (
      <>
      <h2>PlanetList</h2>
      <table style={{margin:"auto"}}>
        <tr>
          <th>Name</th>
          <th>Climate</th>
        </tr>
      {planetList.map((planet) =>
        <tr key={planet.name}><td>{planet.name}</td><td>{planet.climate}</td></tr>
      )}
      </table>
      </>
    )
};

export default Planets;