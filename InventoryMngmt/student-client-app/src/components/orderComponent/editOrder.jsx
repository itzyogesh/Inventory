import axios from "axios";
import React, { Component } from "react";
import OrderNavbar from "./orderNavbar";

class EditOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order_no: "",
      cust_code: "",
      pCode: "",
      pQty: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/orders/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          order_no: res.data.ordno,
          cust_code: res.data.ccode,
          pCode: res.data.pcode,
          pQty: res.data.qty,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onChangeOrderNo = (e) => {
    this.setState({
      order_no: e.target.value,
    });
  };
  onChangeCustomerCode = (e) => {
    this.setState({
      cust_code: e.target.value,
    });
  };
  onChangeProductCode = (e) => {
    this.setState({
      pCode: e.target.value,
    });
  };

  onChangeProductQty = (e) => {
    this.setState({
      pQty: e.target.value,
    });
  };

  onUpdate = (e) => {
    e.preventDefault();
    const obj = {
      ordno: this.state.order_no,
      ccode: this.state.cust_code,
      pcode: this.state.pCode,
      qty: this.state.pQty,
    };
    axios
      .put("http://localhost:4000/orders/" + this.props.match.params.id, obj)
      .then(() => {
        alert("Order Data Updated");
        this.props.history.push("/displayorder");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <>
        <OrderNavbar />
        <div align="center" className="container">
          <main
            role="main"
            className=" col-md-9 ml-sm-auto col-lg-12 pt-3 px-4"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Update Order</h1>
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
              <form onSubmit={this.onUpdate}>
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
                  <label>Customer Code: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.cust_code}
                    onChange={this.onChangeCustomerCode}
                    pattern="[A-Za-z]{3}"
                    title="Three letter Customer code"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Product Code: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.pCode}
                    onChange={this.onChangeProductCode}
                    pattern="[A-Za-z]{6}"
                    title="Six letter Product code"
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
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Update Order"
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

export default EditOrder;
