import React, { Component } from "react";
import axios from "axios";
import StocksNavbar from "./stocksNavbar";
import Login from "../login";

export default class Stocks extends Component {
  componentDidMount() {
    if (!Login.isAuthenticated()) {
      alert("login First");
      this.props.history.push("/");
    }
  }
  constructor() {
    super();
    this.state = {
      pname: [],
      pqty: [],
      sqty: [],
      stqty: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        let tmpArray = [];
        let tmpArray1 = [];
        for (var i = 0; i < res.data.length; i++) {
          tmpArray.push(res.data[i].qty);
          tmpArray1.push(res.data[i].name);
        }
        this.setState({
          pqty: tmpArray,
          pname: tmpArray1,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:4000/sales")
      .then((res) => {
        let tmpArray = [];
        for (var i = 0; i < res.data.length; i++) {
          tmpArray.push(res.data[i].qty);
        }

        this.setState({ sqty: tmpArray });
        //alert( JSON.stringify(res.data))
      })
      .catch((error) => {
        console.log(error);
      });
    // let tmpArray = [];
    // for (var i = 0; i < this.state.sqty.length; i++) {
    //   tmpArray.push(this.state.pqty[i] - this.state.sqty[it]);
    // }
    // this.setState({ stqty: tmpArray });
  }

  render() {
    const items = [];

    this.state.pqty.forEach((num1, index) => {
      const num2 = this.state.sqty[index];
      if (num2) {
        items.push(num1 - num2);
      } else {
        items.push(num1);
      }
    });

    return (
      <>
        <StocksNavbar />
        <div className="container">
          <main
            role="main"
            className=" col-md-9 ml-sm-auto col-lg-12 pt-3 px-4"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Product's Stock</h1>
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
            <div>
              <div
                className="table table-striped"
                style={{ marginTop: 15 }}
                style={{ width: "100%" }}
                align="center"
              >
                <div style={{ width: "25%", float: "left" }}>
                  <h5>Product Name</h5>
                  <ul class="list-group bg-white ">
                    {this.state.pname.map((value, index) => {
                      return (
                        <li class="list-group-item" key={index}>
                          {value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div style={{ width: "25%", float: "left" }}>
                  <h5>Product Quantity</h5>
                  <ul class="list-group  bg-white">
                    {this.state.pqty.map((value, index) => {
                      return (
                        <li class="list-group-item" key={index}>
                          {value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div style={{ width: "25%", float: "left" }}>
                  <h5>Sale Quantity</h5>
                  <ul class="list-group  bg-white">
                    {this.state.sqty.map((value, index) => {
                      return (
                        <li class="list-group-item" key={index}>
                          {value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div style={{ width: "25%", float: "left" }}>
                  <h5>Stock Quantity</h5>
                  <ul class="list-group  bg-white">
                    {items.map((value, index) => {
                      return (
                        <li class="list-group-item" key={index}>
                          {value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}
