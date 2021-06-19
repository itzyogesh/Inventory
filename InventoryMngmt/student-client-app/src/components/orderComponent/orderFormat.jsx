import axios from "axios";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class OrderFromat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  deleteOrder = () => {
    axios
      .delete("http://localhost:4000/orders/" + this.props.obj._id)
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
      return <Redirect to="/displayorder" />;
    }
    return (
      <>
        <tr>
          <td>{this.props.obj.ordno}</td>
          <td>{this.props.obj.ccode}</td>
          <td>{this.props.obj.pcode}</td>
          <td>{this.props.obj.qty}</td>
          <td>
            <Link to={"/editorder/" + this.props.obj._id}>
              <button className="btn btn-primary">Edit</button>
            </Link>
          </td>
          <td>
            <button onClick={this.deleteOrder} className="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  }
}

export default OrderFromat;
