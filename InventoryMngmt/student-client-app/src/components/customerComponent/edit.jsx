import React, { Component } from "react";
import axios from "axios";
import CustomerNavbar from "./customerNavbar";

class EditCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cust_code: "",
      cust_name: "",
      cust_email: "",
      cust_phone: "",
      cust_address: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/customers/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          cust_code: res.data.ccode,
          cust_name: res.data.name,
          cust_email: res.data.email,
          cust_phone: res.data.phone,
          cust_address: res.data.address,
        });
      });
  }

  onChangeCustomerCode = (e) => {
    this.setState({
      cust_code: e.target.value,
    });
  };

  onChangeCustomerName = (e) => {
    this.setState({
      cust_name: e.target.value,
    });
  };

  onChangeCustomerEmail = (e) => {
    this.setState({
      cust_email: e.target.value,
    });
  };

  onChangeCustomerPhone = (e) => {
    this.setState({
      cust_phone: e.target.value,
    });
  };

  onChangeCustomerAddress = (e) => {
    this.setState({
      cust_address: e.target.value,
    });
  };

  onUpdate = (e) => {
    e.preventDefault();
    const obj = {
      ccode: this.state.cust_code,
      name: this.state.cust_name,
      email: this.state.cust_email,
      phone: this.state.cust_phone,
      address: this.state.cust_address,
    };

    axios
      .put("http://localhost:4000/customers/" + this.props.match.params.id, obj)
      .then(() => {
        alert("Data Updated without Error");
        this.props.history.push("/displaycust");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <>
        <CustomerNavbar />
        <div align="center" className="container">
          <main
            role="main"
            className=" col-md-9 ml-sm-auto col-lg-12 pt-3 px-4"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Update Customer</h1>
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
                  <label>Cutomer Code: </label>
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
                  <label>Cutomer Name: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.cust_name}
                    onChange={this.onChangeCustomerName}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address: </label>
                  <input
                    type="email"
                    className="form-control"
                    value={this.state.cust_email}
                    onChange={this.onChangeCustomerEmail}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone no: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.cust_phone}
                    onChange={this.onChangeCustomerPhone}
                    placeholder="1234567890"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Address: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.cust_address}
                    onChange={this.onChangeCustomerAddress}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Update Customer"
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

export default EditCustomer;
