const express = require("express");
const mongoose = require("mongoose");

const Customer = require("../db/customer");
const route = express.Router();

route.post("/", async (req, res) => {
    const { firstName, lastName } = req.body;
    let customer = { firstName, lastName };
    let customerModel = new Customer(customer);

    try {
        await customerModel.save();
    } catch (error) {
        console.log(error);
    }

    res.json(customerModel);
});

module.exports = route;
