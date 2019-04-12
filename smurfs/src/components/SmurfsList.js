import React from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions";

const SmurfsList = props => {
  const { id, name, age, height } = props.smurf;

  const deleteItem = id => {
    props.deleteSmurf(id);
  };
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <p>{height}</p>
      <button onClick={deleteItem.bind(this, id)}>delete</button>
    </div>
  );
};

export default connect(
  null,
  { deleteSmurf }
)(SmurfsList);
