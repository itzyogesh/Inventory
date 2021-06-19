import axios from "axios";
import React, { Component } from "react";
import SaleFormat from "./saleFormat";
import SaleNavbar from "./saleNavbar";
import Login from "../login";

class DisplaySale extends Component {
  componentDidMount() {
    if (!Login.isAuthenticated()) {
      alert("login First");
      this.props.history.push("/");
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      sales: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/sales")
      .then((res) => {
        this.setState({ sales: res.data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  tabSale() {
    return this.state.sales.map((object, i) => {
      return <SaleFormat obj={object} key={i} />;
    });
  }

  render() {
    return (
      <>
        <SaleNavbar />
        <div className="container">
          <main
            role="main"
            className=" col-md-9 ml-sm-auto col-lg-12 pt-3 px-4"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">All Sales</h1>
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
                    <th>Serial no</th>
                    <th>Order no</th>
                    <th>Quantity</th>
                    <th>Rate</th>
                    <th colSpan="2">Action</th>
                  </tr>
                </thead>
                <tbody>{this.tabSale()}</tbody>
              </table>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default DisplaySale;
