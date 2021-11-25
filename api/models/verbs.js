const mongoose = require("mongoose");

const Verb = mongoose.model(
    "Verb",
    new mongoose.Schema({
        verb: String
    })
);

module.exports = Verb;