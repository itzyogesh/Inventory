import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

class Format extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
    this.deleteD = this.deleteD.bind(this);
  }

  deleteD() {
    axios
      .delete("http://localhost:4000/customers/" + this.props.obj._id)
      .then(() => {
        this.setState({ redirect: true });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/displaycust" />;
    }
    return (
      <>
        <tr>
          <td>{this.props.obj.ccode}</td>
          <td>{this.props.obj.name}</td>
          <td>{this.props.obj.email}</td>
          <td>{this.props.obj.phone}</td>
          <td>{this.props.obj.address}</td>
          <td>
            <Link
              to={"/editcust/" + this.props.obj._id}
              className="btn btn-primary"
            >
              Edit
            </Link>
          </td>
          <td>
            <button onClick={this.deleteD} className="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  }
}

export default Format;
