const mongoose = require("mongoose");

const customer = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
});

module.exports = Customer = mongoose.model("customer", customer);
