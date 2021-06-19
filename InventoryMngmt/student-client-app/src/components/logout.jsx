import React, { Component } from "react";
import Login from "./login";

class Logout extends Component {
  componentDidMount() {
    alert("Want to Logout?");
    Login.authenticated = false;
    this.props.history.push("/");
  }

  render() {
    return <></>;
  }
}

export default Logout;
