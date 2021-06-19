import React, { Component } from "react";
import axios from "axios";
import ProductNavbar from "./productNavbar";
import Login from "../login";

export default class Create extends Component {
  componentDidMount() {
    if (!Login.isAuthenticated()) {
      alert("login First");
      this.props.history.push("/");
    }
  }
  constructor() {
    super();

    this.state = {
      pCode: "",
      pName: "",
      pQty: "",
      pPrice: "",
    };
  }
  onChangeProductCode = (e) => {
    this.setState({
      pCode: e.target.value,
    });
  };
  onChangeProductName = (e) => {
    this.setState({
      pName: e.target.value,
    });
  };
  onChangeProductQty = (e) => {
    this.setState({
      pQty: e.target.value,
    });
  };

  onChangeProductPrice = (e) => {
    this.setState({
      pPrice: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // console.log(
    //   `The values are ${this.state.pCode}, ${this.state.pName}, and ${this.state.pQty}`
    // );
    const obj = {
      pcode: this.state.pCode,
      name: this.state.pName,
      qty: this.state.pQty,
      price: this.state.pPrice,
    };
    axios
      .post("http://localhost:4000/products", obj)
      .then((res) => alert("Product Created"));

    this.setState({
      pCode: "",
      pName: "",
      pQty: "",
      pPrice: "",
    });
  };

  render() {
    return (
      <>
        <ProductNavbar />
        <div align="center" className="container">
          <main
            role="main"
            className=" col-md-9 ml-sm-auto col-lg-12 pt-3 px-4"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Add New Product</h1>
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
                  <label>Product Name: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.pName}
                    onChange={this.onChangeProductName}
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
                  <label>Price: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.pPrice}
                    onChange={this.onChangeProductPrice}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Add Product"
                    className="btn btn-primary mt-3 w-100"
                  />
                </div>
              </form>
            </div>
          </main>
        </div>

        {/* <Display /> */}
      </>
    );
  }
}

// import axios from 'axios'
// import {Component} from 'react'

// export default class Addbook extends Component{
// constructor(){
//     super()
//     this.state={
//         fullname:"",
//         price:"",
//         author:"",
//         description:""
//     }
// }
// handle=(e)=>{
//     var value=e.target.value
//    var name=e.target.name
//    this.setState({...this.state,[name]:value})
// }
// show=()=>{
//     axios.post("http://localhost:8002/api/add-book",{name:this.state.fullname,price:this.state.price,author:this.state.author,description:this.state.description})
//     .then((res)=>{
//         console.log(res.data)
//     })
// }

//     render(){
//         return(
//             <>
//             <div className="container">
//      <form className="form-inline" onSubmit={this.show}>
//       <div className="form-group">
//     name:<input type="text" className="form-control" name="fullname" onChange={this.handle} value={this.state.fullname}/>
//   </div>
//   <div className="form-group">
//     price:<input type="text" className="form-control" name="price" onChange={this.handle} value={this.state.price} />
//   </div>
//   <div className="form-group">
//    author: <input type="text" className="form-control" name="author" onChange={this.handle} value={this.state.author} />
//   </div>
//   <div className="form-group">
//     description:<input type="text" className="form-control" name="description" onChange={this.handle} value={this.state.description} />
//   </div>

//   <button type="submit" className="btn btn-default mt-2 text-center" onChange={this.handle}>Submit</button>
// </form>
// </div>

//             </>
//         )
//     }
// }
