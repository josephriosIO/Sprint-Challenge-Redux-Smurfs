import React, { Component } from "react";
import { connect } from "react-redux";
import SmurfsList from "./SmurfsList";
import AddSmurf from "./AddSmurf";
import { getSmurfs } from "../actions";
import { Link, Route } from "react-router-dom";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById("ipl-progress-indicator");
      if (ele) {
        // fade out
        ele.classList.add("available");
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = "";
        }, 2000);
      }
    });
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Link to="/add">Add Smurf</Link>
        <Link to="/">home</Link>
        <div>Welcome to your Redux version of Smurfs!</div>
        {this.props.gotSmurfs
          ? this.props.smurfs.map(smurf => (
              <Route
                exact
                path="/"
                render={props => <SmurfsList {...props} smurf={smurf} />}
              />
            ))
          : null}
        <Route path="/add" component={AddSmurf} />
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
