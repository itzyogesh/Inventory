const express = require("express");
const orRouter = new express.Router();

const Order = require("../models/order");

orRouter.post("/orders", async (req, res) => {
  try {
    const addOrder = new Order(req.body);
    await addOrder.save();
    res.status(200).send(addOrder);
  } catch (e) {
    res.status(400).send(e);
  }
});

orRouter.get("/orders", async (req, res) => {
  try {
    const findAll = await Order.find();
    res.status(201).send(findAll);
  } catch (e) {
    res.status(400).send(e);
  }
});

//  Defined update route

orRouter.get("/orders/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const findIndividual = await Order.findById(id);
    res.status(201).send(findIndividual);
  } catch (e) {
    res.status(400).send(e);
  }
});

orRouter.put("/orders/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateIndividual = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).send(updateIndividual);
  } catch (e) {
    res.status(400).send(e);
  }
});

orRouter.delete("/orders/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteIndividual = await Order.findByIdAndRemove(_id);
    res.status(201).send(deleteIndividual);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = orRouter;
