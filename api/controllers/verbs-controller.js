const mongoose = require('mongoose');
const verb = require('../models/verbs');

exports.listVerbs = (req, res) => {
    verb.find({}, (err, verb) => {
        if (err)
            res.send(err);
        res.json(verb);
    });
}

exports.createVerb = (req, res) => {
    const new_verb = new verb(req.body);
    new_verb.save((err, verb) => {
        if (err)
            res.send(err);
        res.json(verb);
    });
};

exports.readVerb = (req, res) => {
    verb.findById(req.params.verbId, (err, verb) => {
        if (err)
            res.send(err);
        res.json(verb);
    });
};

exports.updateVerb = (req, res) => {
    verb.findOneAndUpdate({_id: req.params.verbId}, req.body, {new: true}, (err, verb) => {
        if (err)
            res.send(err);
        res.json(verb);
    });
};

exports.deleteVerb = (req, res) => {
    verb.remove({
        _id: req.params.verbId
    }, (err, verb) => {
        if (err)
            res.send(err);
        res.json({message: 'Verb deleted'});
    });
};