import React, { Component } from "react";
import axios from "axios";
import Format from "./Format";
import CustomerNavbar from "./customerNavbar";
import Login from "../login";

class DisplayCustomer extends Component {
  componentDidMount() {
    if (!Login.isAuthenticated()) {
      alert("login First");
      this.props.history.push("/");
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/customers")
      .then((res) => {
        this.setState({ customers: res.data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  tabRoww() {
    return this.state.customers.map((object, i) => {
      return <Format obj={object} key={i} />;
    });
  }

  render() {
    return (
      <>
        <CustomerNavbar />
        <div className="container">
          <main
            role="main"
            className=" col-md-9 ml-sm-auto col-lg-12 pt-3 px-4"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Customer List</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                  <button className="btn btn-sm btn-outline-secondary">
                    Share
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    Export
                  </button>
                </div>
                <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                  <span data-feather="calendar"></span>
                  This week
                </button>
              </div>
            </div>
            <div style={{ marginTop: 10 }}>
              <table
                className="table table-striped bg-white rounded-3"
                style={{ marginTop: 20 }}
              >
                <thead>
                  <tr>
                    <th>Customer Code</th>
                    <th>Customer Name</th>
                    <th>Email Address</th>
                    <th>Phone no</th>
                    <th>Address</th>
                    <th colSpan="2">Action</th>
                  </tr>
                </thead>
                <tbody>{this.tabRoww()}</tbody>
              </table>
            </div>
          </main>
        </div>
        {/* <div>
          <h3 align="center">Customer List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Customer Code</th>
                <th>Customer Name</th>
                <th>Email Address</th>
                <th>Phone no</th>
                <th>Address</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>{this.tabRoww()}</tbody>
          </table>
        </div> */}
      </>
    );
  }
}

export default DisplayCustomer;
