import React, { useEffect, useState } from "react";


function PlanetInfo() {
  const [planet, setPlanet] = useState(null);
  

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/12/?format=json")
      .then((response) => response.json())
      .then((data) => setPlanet(data));
  }, []);

  if (!planet) {
    return <div>Loading planet information...</div>;
  }

  return (
    <div>
      <h1>{planet.name}</h1>
      <p>Climate: {planet.climate}</p>
      <p>Diameter: {planet.diameter}</p>
      <p>Gravity: {planet.gravity}</p>
      <p>Orbital Period: {planet.orbital_period}</p>
      <p>Population: {planet.population}</p>
      <p>Rotation Period: {planet.rotation_period}</p>
      <p>Surface Water: {planet.surface_water}</p>
      <p>Terrain: {planet.terrain}</p>
    </div>
  );
}

export default PlanetInfo;


