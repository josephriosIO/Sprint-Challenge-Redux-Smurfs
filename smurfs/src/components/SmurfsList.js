import React from "react";

const SmurfsList = props => {
  const { name, age, height } = props.smurf;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <p>{height}</p>
    </div>
  );
};

export default SmurfsList;
