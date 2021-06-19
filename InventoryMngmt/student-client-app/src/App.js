import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";

import Create from "./components/productComponent/create.component";
import Edit from "./components/productComponent/edit.component";
import Display from "./components/productComponent/display.component";

import CreateCustomer from "./components/customerComponent/create";
import DisplayCustomer from "./components/customerComponent/display";
import EditCustomer from "./components/customerComponent/edit";

import CreateOrder from "./components/orderComponent/createOrder";
import DisplayOrder from "./components/orderComponent/displayOrder";
import EditOrder from "./components/orderComponent/editOrder";
import CreateSale from "./components/saleComponent/createSale";
import DisplaySale from "./components/saleComponent/displaySale";
import EditSale from "./components/saleComponent/editSale";
import Register from "./components/register";
import Login from "./components/login";
import Stocks from "./components/stockComponent/stocks";
import Remains from "./components/pendingOrders/pendingOrder";
import Logout from "./components/logout";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/stocks" component={Stocks} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/edit/:id" component={Edit} />
            <Route exact path="/display" component={Display} />
            <Route exact path="/createcust" component={CreateCustomer} />
            <Route exact path="/displaycust" component={DisplayCustomer} />
            <Route exact path="/editcust/:id" component={EditCustomer} />
            <Route exact path="/createorder" component={CreateOrder} />
            <Route exact path="/displayorder" component={DisplayOrder} />
            <Route exact path="/editorder/:id" component={EditOrder} />
            <Route exact path="/createsale" component={CreateSale} />
            <Route exact path="/displaysale" component={DisplaySale} />
            <Route exact path="/editsale/:id" component={EditSale} />
            <Route exact path="/remains" component={Remains} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
