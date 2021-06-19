import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductNavbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 rounded-3">
          <Link
            to={"/home"}
            align="center"
            className="navbar-brand col-sm-3 col-md-2 mr-0 "
          >
            Inventory
          </Link>
          <ul className="navbar-nav px-5 ">
            <li className="nav-item text-nowrap">
              <Link to={"/create"} className="nav-link text-white">
                Add Products
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav px-5">
            <li className="nav-item text-nowrap">
              <Link to={"/display"} className="nav-link text-white">
                Show Products
              </Link>
            </li>
          </ul>

          <input
            className="form-control form-control-dark w-100 mx-2 my-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </nav>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/home"} className="navbar-brand">
            Inventory
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/create"} className="nav-link">
                  Add Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/display"} className="nav-link">
                  Show Products
                </Link>
              </li>
            </ul>
          </div>
        </nav> */}
      </>
    );
  }
}

export default ProductNavbar;
