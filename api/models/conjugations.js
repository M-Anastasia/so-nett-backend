const mongoose = require("mongoose");

const Conjugation = mongoose.model(
    "Conjugation",
    new mongoose.Schema({
        verb: String,
        pronoun: String,
        tense: String,
        conjugation: String
    })
);

module.exports = Conjugation;