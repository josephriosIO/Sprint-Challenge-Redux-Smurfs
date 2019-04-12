import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf, getSmurfs } from "../actions";

class AddSmurf extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, age, height } = this.state;

    const smurf = {
      name,
      age,
      height
    };

    this.props.addSmurf(smurf);
    this.props.history.push("/");

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="enter name..."
            value={this.state.name}
            onChange={this.handleChanges}
          />
          <input
            name="age"
            type="text"
            placeholder="enter age..."
            value={this.state.age}
            onChange={this.handleChanges}
          />
          <input
            name="height"
            type="text"
            placeholder="enter height..."
            value={this.state.height}
            onChange={this.handleChanges}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addingSmurf: state.addingSmurf
});

export default connect(
  mapStateToProps,
  { addSmurf, getSmurfs }
)(AddSmurf);
