const mongoose = require("mongoose");

const Pronoun = mongoose.model(
    "Pronoun",
    new mongoose.Schema({
        pronoun: String
    })
);

module.exports = Pronoun;