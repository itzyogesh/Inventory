import React, { Component } from "react";
import axios from "axios";
import SaleNavbar from "./saleNavbar";
import Login from "../login";

class CreateSale extends Component {
  componentDidMount() {
    if (!Login.isAuthenticated()) {
      alert("login First");
      this.props.history.push("/");
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      serial_no: "",
      order_no: "",
      pQty: "",
      rate: "",
    };
  }

  onChangeSerialNo = (e) => {
    this.setState({
      serial_no: e.target.value,
    });
  };
  onChangeOrderNo = (e) => {
    this.setState({
      order_no: e.target.value,
    });
  };
  onChangeProductQty = (e) => {
    this.setState({
      pQty: e.target.value,
    });
  };

  onChangeRate = (e) => {
    this.setState({
      rate: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      sno: this.state.serial_no,
      ordno: this.state.order_no,
      qty: this.state.pQty,
      rate: this.state.rate,
    };
    axios
      .post("http://localhost:4000/sales", obj)
      .then((res) => {
        alert("Sale Added");
      })
      .catch((e) => {
        console.log(e);
      });
    this.setState({
      serial_no: "",
      order_no: "",
      pQty: "",
      rate: "",
    });
  };

  render() {
    return (
      <>
        <SaleNavbar />
        <div align="center" className="container">
          <main
            role="main"
            className=" col-md-9 ml-sm-auto col-lg-12 pt-3 px-4"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Add New Sale</h1>
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
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Serial no: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.serial_no}
                    onChange={this.onChangeSerialNo}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Order no: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.order_no}
                    onChange={this.onChangeOrderNo}
                    pattern="[0-9]{6}"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Quantity: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.pQty}
                    onChange={this.onChangeProductQty}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Rate: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.rate}
                    onChange={this.onChangeRate}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Add Sale"
                    className="btn btn-primary mt-2"
                  />
                </div>
              </form>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default CreateSale;
