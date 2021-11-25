const mongoose = require('mongoose');
const tense = require('../models/tenses');

exports.listTenses = (req, res) => {
    tense.find({}, (err, tense) => {
        if (err)
            res.send(err);
        res.json(tense);
    });
}

exports.createTense = (req, res) => {
    const new_tense = new tense(req.body);
    new_tense.save((err, tense) => {
        if (err)
            res.send(err);
        res.json(tense);
    });
};

exports.readTense = (req, res) => {
    tense.findById(req.params.tenseId, (err, tense) => {
        if (err)
            res.send(err);
        res.json(tense);
    });
};

exports.updateTense = (req, res) => {
    tense.findOneAndUpdate({_id: req.params.tenseId}, req.body, {new: true}, (err, tense) => {
        if (err)
            res.send(err);
        res.json(tense);
    });
};

exports.deleteTense = (req, res) => {
    tense.remove({
        _id: req.params.tenseId
    }, (err, tense) => {
        if (err)
            res.send(err);
        res.json({message: 'Tense deleted'});
    });
};