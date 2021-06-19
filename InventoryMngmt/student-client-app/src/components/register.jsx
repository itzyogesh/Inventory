import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      u_name: "",
      e_mail: "",
      pass: "",
      cpass: "",
    };
  }

  onChangeUserName = (e) => {
    this.setState({
      u_name: e.target.value,
    });
  };

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

  onChangeCpass = (e) => {
    this.setState({
      cpass: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      username: this.state.u_name,
      email: this.state.e_mail,
      password: this.state.pass,
      cpassword: this.state.cpass,
    };
    e.preventDefault();
    const obj1 = {
      email: this.state.e_mail,
      password: this.state.pass,
    };
    const { pass, cpass } = this.state;
    // perform all neccassary validations
    if (pass !== cpass) {
      alert("Passwords don't match");
    } else {
      // make API call

      axios
        .post("http://localhost:4000/login", obj1)
        .then((response) => {
          if (response.data || response.data.code === 200) {
            alert("user alredy registered");
            this.props.history.push("/register");
          } else {
            axios
              .post("http://localhost:4000/register", obj)
              .then((response) => {
                if (response.data || response.data.code === 200) {
                  //alert(response.data.success)
                  // this.props.history.push("/");
                  alert("Addded");
                } else if (response.data.email === this.state.obj.e_mail) {
                  alert("same");
                } else {
                  console.log("Username does not exists");
                  alert("Username already exist");
                }
              });
            this.setState({
              u_name: "",
              e_mail: "",
              pass: "",
              cpass: "",
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  render() {
    return (
      <>
        <div className="row mt-5 ">
          <div className="col-md-6 m-auto">
            <div className="card card-body">
              <h1 className="text-center mb-3">
                <i className="fas fa-user-plus"></i>
                Register
              </h1>

              <form onSubmit={this.onSubmit}>
                <div className="form-group mb-2">
                  <label className="mb-1" for="name">
                    Username
                  </label>
                  <input
                    type="name"
                    id="name"
                    name="username"
                    className="form-control"
                    placeholder="Enter Name"
                    value={this.state.u_name}
                    onChange={this.onChangeUserName}
                    required
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="mb-1" for="email">
                    Email
                  </label>
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
                <div className="form-group mb-2">
                  <label className="mb-1" for="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Create Password"
                    value={this.state.pass}
                    onChange={this.onChangePass}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    required
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="mb-1" for="password2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="password2"
                    name="cpassword"
                    className="form-control"
                    placeholder="Confirm Password"
                    value={this.state.cpass}
                    onChange={this.onChangeCpass}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 btn btn-primary btn-block w-100"
                >
                  Register
                </button>
              </form>
              <p className="forgot-password text-right mt-2">
                Have An Account?
                <Link to={"/"}>
                  <button className="badge rounded-pill bg-dark mx-2">
                    Login
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
