const express = require("express");
const saRouter = new express.Router();

const Sale = require("../models/Sale");

saRouter.post("/sales", async (req, res) => {
  try {
    const addSale = new Sale(req.body);
    await addSale.save();
    res.status(200).send(addSale);
  } catch (e) {
    res.status(400).send(e);
  }
});

saRouter.get("/sales", async (req, res) => {
  try {
    const findAll = await Sale.find();
    res.status(201).send(findAll);
  } catch (e) {
    res.status(400).send(e);
  }
});

//  Defined update route

saRouter.get("/sales/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const findIndividual = await Sale.findById(id);
    res.status(201).send(findIndividual);
  } catch (e) {
    res.status(400).send(e);
  }
});

saRouter.put("/sales/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateIndividual = await Sale.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).send(updateIndividual);
  } catch (e) {
    res.status(400).send(e);
  }
});

saRouter.delete("/sales/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteIndividual = await Sale.findByIdAndRemove(_id);
    res.status(201).send(deleteIndividual);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = saRouter;
