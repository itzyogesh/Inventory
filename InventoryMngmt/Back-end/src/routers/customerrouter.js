const express = require("express");
const curouter = new express.Router();

const Customer = require("../models/customer");

curouter.post("/customers", async (req, res) => {
  try {
    const addCustomer = new Customer(req.body);
    await addCustomer.save();
    res.status(200).send(addCustomer);
  } catch (e) {
    res.status(400).send(e);
  }
});

curouter.get("/customers", async (req, res) => {
  try {
    const findAll = await Customer.find();
    res.status(201).send(findAll);
  } catch (e) {
    res.status(400).send(e);
  }
});

//  Defined update route

curouter.get("/customers/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const findIndividual = await Customer.findById(id);
    res.status(201).send(findIndividual);
  } catch (e) {
    res.status(400).send(e);
  }
});

curouter.put("/customers/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateIndividual = await Customer.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).send(updateIndividual);
  } catch (e) {
    res.status(400).send(e);
  }
});

curouter.delete("/customers/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteIndividual = await Customer.findByIdAndRemove(_id);
    res.status(201).send(deleteIndividual);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = curouter;
