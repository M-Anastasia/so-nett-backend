const mongoose = require('mongoose');
const pronoun = require('../models/pronouns');

exports.listPronouns = (req, res) => {
    pronoun.find({}, (err, pronoun) => {
        if (err)
            res.send(err);
        res.json(pronoun);
    });
}

exports.createPronoun = (req, res) => {
    const new_pronoun = new pronoun(req.body);
    new_pronoun.save((err, pronoun) => {
        if (err)
            res.send(err);
        res.json(pronoun);
    });
};

exports.readPronoun = (req, res) => {
    pronoun.findById(req.params.pronounId, (err, pronoun) => {
        if (err)
            res.send(err);
        res.json(pronoun);
    });
};

exports.updatePronoun = (req, res) => {
    pronoun.findOneAndUpdate({_id: req.params.pronounId}, req.body, {new: true}, (err, pronoun) => {
        if (err)
            res.send(err);
        res.json(pronoun);
    });
};

exports.deletePronoun = (req, res) => {
    pronoun.remove({
        _id: req.params.pronounId
    }, (err, pronoun) => {
        if (err)
            res.send(err);
        res.json({message: 'Pronoun deleted'});
    });
};