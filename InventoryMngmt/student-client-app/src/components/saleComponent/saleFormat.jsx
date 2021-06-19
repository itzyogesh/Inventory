import axios from "axios";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class SaleFormat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  deleteSale = () => {
    axios
      .delete("http://localhost:4000/sales/" + this.props.obj._id)
      .then(() => {
        this.setState({ redirect: true });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/displaysale" />;
    }
    return (
      <>
        <tr>
          <td>{this.props.obj.sno}</td>
          <td>{this.props.obj.ordno}</td>
          <td>{this.props.obj.qty}</td>
          <td>{this.props.obj.rate}</td>
          <td>
            <Link to={"/editsale/" + this.props.obj._id}>
              <button className="btn btn-primary">Edit</button>
            </Link>
          </td>
          <td>
            <button onClick={this.deleteSale} className="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  }
}

export default SaleFormat;
