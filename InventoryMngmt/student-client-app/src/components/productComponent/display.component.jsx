import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import ProductNavbar from "./productNavbar";
import Login from "../login";

export default class Index extends Component {
  componentDidMount() {
    if (!Login.isAuthenticated()) {
      alert("login First");
      this.props.history.push("/");
    }
  }
  constructor() {
    super();
    this.state = { products: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        this.setState({ products: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.products.map((object, i) => {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <>
        <ProductNavbar />
        <div className="container">
          <main
            role="main"
            className=" col-md-9 ml-sm-auto col-lg-12 pt-3 px-4"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Product List</h1>
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
                    <th>Product Code</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th colSpan="2">Action</th>
                  </tr>
                </thead>
                <tbody>{this.tabRow()}</tbody>
              </table>
            </div>
          </main>
        </div>
      </>
    );
  }
}
