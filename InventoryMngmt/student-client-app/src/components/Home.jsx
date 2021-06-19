import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import CreateCustomer from "./customerComponent/create";

class Home extends Component {
  componentDidMount() {
    if (!Login.isAuthenticated()) {
      alert("login First");
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 rounded-3">
          <Link
            to={"/home"}
            align="center"
            className="navbar-brand col-sm-3 col-md-2 mr-0"
          >
            Inventory
          </Link>
          <input
            className="form-control form-control-dark w-100 mx-2 my-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <ul className="navbar-nav px-5">
            <li className="nav-item text-nowrap">
              <Link to={"/logout"} className="nav-link text-white">
                Logout
              </Link>
            </li>
          </ul>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link
                      to={"/home"}
                      className="nav-link fw-bolder text-primary active"
                    >
                      Dashboard
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to={"/create"}
                      className="nav-link fw-bolder text-dark"
                    >
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/createcust"}
                      className="nav-link fw-bolder text-dark"
                    >
                      Customers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/createorder"}
                      className="nav-link fw-bolder text-dark"
                    >
                      Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/createsale"}
                      className="nav-link fw-bolder text-dark"
                    >
                      Sales
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/stocks"}
                      className="nav-link fw-bolder text-dark"
                    >
                      Stocks
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/remains"}
                      className="nav-link fw-bolder text-dark"
                    >
                      Pending Orders
                    </Link>
                  </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                  <span className="text-primary">Saved reports</span>
                  <a className="d-flex align-items-center text-muted" href="#">
                    <span data-feather="plus-circle"></span>
                  </a>
                </h6>
                <ul className="nav flex-column mb-2">
                  <li className="nav-item">
                    <a className="nav-link fw-bolder text-dark" href="#">
                      <span data-feather="file-text"></span>
                      Current month
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bolder text-dark" href="#">
                      <span data-feather="file-text"></span>
                      Last ord
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bolder text-dark" href="#">
                      <span data-feather="file-text"></span>
                      Social engagmt
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bolder text-dark" href="#">
                      <span data-feather="file-text"></span>
                      Year-end sale
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <main
              role="main"
              className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
            >
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 className="h2">Manage Assets</h1>
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

              <div class="container mt-4">
                <div class="row">
                  <div class="col-md-3 col-sm-6 mt-3">
                    <div class="card card-block">
                      <img src="./img/product.svg" alt="good pic" />
                      <div className="card-body">
                        <h2
                          align="center"
                          style={{ fontSize: "140%" }}
                          className="card-text"
                        >
                          Products
                        </h2>
                      </div>
                      <Link to={"/create"}>
                        <button className="btn btn-primary w-100">Go to</button>
                      </Link>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 mt-3">
                    <div class="card card-block">
                      <img src="./img/customer.svg" alt="good pic" />
                      <div className="card-body">
                        <h2
                          align="center"
                          style={{ fontSize: "140%" }}
                          className="card-text"
                        >
                          Customer
                        </h2>
                      </div>
                      <Link to={"/createcust"}>
                        <button className="btn btn-primary w-100">Go to</button>
                      </Link>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 mt-3">
                    <div class="card card-block">
                      <img src="./img/customer_car.svg" alt="good pic" />
                      <div className="card-body">
                        <h2
                          align="center"
                          style={{ fontSize: "140%" }}
                          className="card-text"
                        >
                          Orders
                        </h2>
                      </div>
                      <Link to={"/createorder"}>
                        <button className="btn btn-primary w-100">Go to</button>
                      </Link>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 mt-3">
                    <div class="card card-block">
                      <img src="./img/pending.svg" alt="good pic" />
                      <div className="card-body">
                        <h2
                          align="center"
                          style={{ fontSize: "143%" }}
                          className="card-text"
                        >
                          Sales
                        </h2>
                      </div>
                      <Link to={"/createsale"}>
                        <button className="btn btn-primary w-100">Go to</button>
                      </Link>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 mt-3">
                    <div class="card card-block">
                      <img src="./img/stocks.svg" alt="good pic" />
                      <div className="card-body">
                        <h2
                          align="center"
                          style={{ fontSize: "143%" }}
                          className="card-text"
                        >
                          Stocks
                        </h2>
                      </div>
                      <Link to={"/stocks"}>
                        <button className="btn btn-primary w-100">Go to</button>
                      </Link>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 mt-3">
                    <div class="card card-block">
                      <img src="./img/sale.svg" alt="good pic" />
                      <div className="card-body">
                        <h2
                          align="center"
                          style={{ fontSize: "140%" }}
                          className="card-text"
                        >
                          Pending
                        </h2>
                      </div>
                      <Link to={"/remains"}>
                        <button className="btn btn-primary w-100">Go to</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
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
                <Link to={"/register"} className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <h1 align="center">Manage Assets</h1>
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="card card-block">
                <img src="./img/product.svg" alt="good pic" />
                <div className="card-body">
                  <h2 align="center" className="card-text">
                    Products
                  </h2>
                </div>
                <Link to={"/create"}>
                  <button className="btn btn-primary w-100">
                    Manage Products
                  </button>
                </Link>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="card card-block">
                <img src="./img/customer.svg" alt="good pic" />
                <div className="card-body">
                  <h2 align="center" className="card-text">
                    Customers
                  </h2>
                </div>
                <Link to={"/createcust"}>
                  <button className="btn btn-primary w-100">
                    Manage Customers
                  </button>
                </Link>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="card card-block">
                <img src="./img/customer_car.svg" alt="good pic" />
                <div className="card-body">
                  <h2 align="center" className="card-text">
                    Orders
                  </h2>
                </div>
                <Link to={"/createorder"}>
                  <button className="btn btn-primary w-100">
                    Manage Orders
                  </button>
                </Link>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="card card-block">
                <img src="./img/sale.svg" alt="good pic" />
                <div className="card-body">
                  <h2 align="center" className="card-text">
                    Sales
                  </h2>
                </div>
                <Link to={"/createsale"}>
                  <button className="btn btn-primary w-100">
                    Manage Sales
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </>
    );
  }
}

export default Home;
