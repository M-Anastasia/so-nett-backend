const mongoose = require("mongoose");

const Tense = mongoose.model(
    "Tense",
    new mongoose.Schema({
        tense: String
    })
);

module.exports = Tense;