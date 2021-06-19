const express = require("express");
const porouter = new express.Router();

const Product = require("../models/product");

porouter.post("/products", async (req, res) => {
  try {
    const addProduct = new Product(req.body);
    await addProduct.save();
    res.status(200).send(addProduct);
  } catch (e) {
    res.status(400).send(e);
  }
});

porouter.get("/products", async (req, res) => {
  try {
    const findAll = await Product.find();
    res.status(201).send(findAll);
  } catch (e) {
    res.status(400).send(e);
  }
});

//  Defined update route

porouter.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const findIndividual = await Product.findById(id);
    res.status(201).send(findIndividual);
  } catch (e) {
    res.status(400).send(e);
  }
});

porouter.put("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateIndividual = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).send(updateIndividual);
  } catch (e) {
    res.status(400).send(e);
  }
});

porouter.delete("/products/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteIndividual = await Product.findByIdAndRemove(_id);
    res.status(201).send(deleteIndividual);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = porouter;

// const express = require("express");
// const businessRoutes = express.Router();

// // Require Business model in our routes module
// let Product = require("../models/product");

// // Defined store route
// businessRoutes.route("/products").post(function (req, res) {
//   let business = new Product(req.body);
//   business
//     .save()
//     .then((business) => {
//       res.status(200).json({ business: "business in added successfully" });
//     })
//     .catch((err) => {
//       res.status(400).send("unable to save to database");
//     });
// });

// // Defined get data(index or listing) route
// businessRoutes.route("/products").get(function (req, res) {
//   Product.find(function (err, businesses) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(businesses);
//     }
//   });
// });

// // Defined edit route
// businessRoutes.route("/products/:id").get(function (req, res) {
//   let id = req.params.id;
//   Product.findById(id, function (err, business) {
//     res.json(business);
//   });
// });

// //  Defined update route

// businessRoutes.route("/products/:id").put((req, res, next) => {
//   Product.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     (error, data) => {
//       if (error) {
//         return next(error);
//       } else {
//         res.json(data);
//         console.log("Book updated successfully!");
//       }
//     }
//   );
// });

// // Defined delete | remove | destroy route
// businessRoutes.route("/products/:id").delete(function (req, res) {
//   Product.findByIdAndRemove({ _id: req.params.id }, function (err, business) {
//     if (err) res.json(err);
//     else res.json("Successfully removed");
//   });
// });

// module.exports = businessRoutes;
