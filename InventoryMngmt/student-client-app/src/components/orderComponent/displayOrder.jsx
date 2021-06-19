import axios from "axios";
import React, { Component } from "react";
import OrderFormat from "./orderFormat";
import OrderNavbar from "./orderNavbar";
import Login from "../login";

class DisplayOrder extends Component {
  componentDidMount() {
    if (!Login.isAuthenticated()) {
      alert("login First");
      this.props.history.push("/");
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/orders")
      .then((res) => {
        this.setState({ orders: res.data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  tabShow() {
    return this.state.orders.map((object, i) => {
      return <OrderFormat obj={object} key={i} />;
    });
  }

  render() {
    return (
      <>
        <OrderNavbar />
        <div className="container">
          <main
            role="main"
            className=" col-md-9 ml-sm-auto col-lg-12 pt-3 px-4"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Order List</h1>
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
                className="table table-striped  bg-white rounded-3"
                style={{ marginTop: 20 }}
              >
                <thead>
                  <tr>
                    <th>Order no</th>
                    <th>Customer Code</th>
                    <th>Product Code</th>
                    <th>Quantity</th>
                    <th colSpan="2">Action</th>
                  </tr>
                </thead>
                <tbody>{this.tabShow()}</tbody>
              </table>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default DisplayOrder;
