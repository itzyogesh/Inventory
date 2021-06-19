import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.deleteData = this.deleteData.bind(this);
  }
  deleteData() {
    axios
      .delete("http://localhost:4000/products/" + this.props.obj._id)
      .then(() => this.setState({ redirect: true }))
      .catch((err) => console.log(err));
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/display" />;
    }
    return (
      <tr>
        <td>{this.props.obj.pcode}</td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.qty}</td>
        <td>{this.props.obj.price}</td>
        <td>
          <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">
            Edit
          </Link>
        </td>
        <td>
          <button onClick={this.deleteData} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
