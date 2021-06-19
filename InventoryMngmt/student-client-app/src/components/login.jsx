import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Login extends Component {
  static authenticated = false;
  constructor() {
    super();

    this.state = {
      e_mail: "",
      pass: "",
    };
  }
  componentDidMount() {
    this.props.history.push("/");
  }
  onChangeEmail = (e) => {
    this.setState({
      e_mail: e.target.value,
    });
  };

  onChangePass = (e) => {
    this.setState({
      pass: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      email: this.state.e_mail,
      password: this.state.pass,
    };
    axios
      .post("http://localhost:4000/login", obj)
      .then((response) => {
        if (response.data || response.data.code === 200) {
          //alert(response.data.success)
          Login.authenticated = true;
          this.props.history.push("/home");
        } else {
          console.log("Invalid Details");
          alert("Invalid Details");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  static isAuthenticated() {
    return Login.authenticated;
  }
  render() {
    return (
      <>
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <div className="card card-body">
              <form onSubmit={this.onSubmit}>
                <h1 className="text-center mb-3">Login</h1>

                <div className="form-group mb-3">
                  <label className="mb-2">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={this.state.e_mail}
                    onChange={this.onChangeEmail}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="mb-2">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={this.state.pass}
                    onChange={this.onChangePass}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block w-100"
                >
                  Submit
                </button>

                <p className="forgot-password text-right mt-2">
                  No Account?
                  <Link to={"/register"}>
                    <button className="badge rounded-pill bg-dark mx-2">
                      Register Now
                    </button>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <div className="card card-body">
              <h1 className="text-center mb-3">
                <i className="fas fa-sign-in-alt"></i>
                Login
              </h1>

              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={this.state.e_mail}
                    onChange={this.onChangeEmail}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={this.state.pass}
                    onChange={this.onChangePass}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 btn btn-primary btn-block"
                >
                  Login
                </button>
              </form>
              <p className="lead mt-4">
                No Account?
                <Link to={"/register"}>Register Now</Link>
              </p>
            </div>
          </div>
        </div> */}
      </>
    );
  }
}

export default Login;
