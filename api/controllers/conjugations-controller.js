const mongoose = require('mongoose');
const conjugation = require('../models/conjugations');

exports.listConjugations = (req, res) => {
    conjugation.find({}, (err, conjugation) => {
        if (err)
            res.send(err);
        res.json(conjugation);
    });
}

exports.randomListConjugations = (req, res) => {
    conjugation.aggregate([ { $sample: { size : 100 } } ]).exec((err, resp) => {
        res.json(resp);
    });
}

exports.createConjugation = (req, res) => {
    const new_conjugation = new conjugation(req.body);
    new_conjugation.save((err, conjugation) => {
        if (err)
            res.send(err);
        res.json(conjugation);
    });
};

exports.readConjugation = (req, res) => {
    conjugation.findById(req.params.conjugationId, (err, conjugation) => {
        if (err)
            res.send(err);
        res.json(conjugation);
    });
};

exports.updateConjugation = (req, res) => {
    conjugation.findOneAndUpdate({_id: req.params.conjugationId}, req.body, {new: true}, (err, conjugation) => {
        if (err)
            res.send(err);
        res.json(conjugation);
    });
};

exports.deleteConjugation = (req, res) => {
    conjugation.remove({
        _id: req.params.conjugationId
    }, (err, conjugation) => {
        if (err)
            res.send(err);
        res.json({message: 'Conjugation deleted'});
    });
};