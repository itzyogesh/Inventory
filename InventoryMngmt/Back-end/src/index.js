const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4000;
const cors = require("cors");
const config = require("./db/DB");
const mongoose = require("mongoose");
const productRoute = require("./routers/productrouter");
const customerRoute = require("./routers/customerrouter");
const orderRoute = require("./routers/orderrouter");
const saleRoute = require("./routers/salerouter");
const loginRegisterRoute = require("./routers/registerLogin");

mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("Can not connect to the database" + err);
    }
  );

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(productRoute);
app.use(customerRoute);
app.use(orderRoute);
app.use(saleRoute);
app.use(loginRegisterRoute);

app.listen(PORT, () => {
  console.log("Server is running on Port:", PORT);
});
