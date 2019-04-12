import React, { Component } from "react";
import { connect } from "react-redux";
import SmurfsList from "./SmurfsList";
import { getSmurfs } from "../actions";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        {this.props.gotSmurfs
          ? this.props.smurfs.map(smurf => (
              <SmurfsList key={smurf.id} smurf={smurf} />
            ))
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  gotSmurfs: state.gotSmurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
