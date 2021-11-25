module.exports = (app) => {
    const verbs = require('../controllers/verbs-controller.js');
    const pronouns = require('../controllers/pronouns-controller.js');
    const tenses = require('../controllers/tenses-controller.js');
    const conjugations = require('../controllers/conjugations-controller.js');

    app.route('/api/verbs')
        .get(verbs.listVerbs)
        .post(verbs.createVerb);

    app.route('/verbs/:verbId')
        .get(verbs.readVerb)
        .put(verbs.updateVerb)
        .delete(verbs.deleteVerb);

    app.route('/api/pronouns')
        .get(pronouns.listPronouns)
        .post(pronouns.createPronoun);

    app.route('/verbs/:pronounId')
        .get(pronouns.readPronoun)
        .put(pronouns.updatePronoun)
        .delete(pronouns.deletePronoun);

    app.route('/api/tenses')
        .get(tenses.listTenses)
        .post(tenses.createTense);

    app.route('/verbs/:tenseId')
        .get(tenses.readTense)
        .put(tenses.updateTense)
        .delete(tenses.deleteTense);

    app.route('/api/conjugations')
        .get(conjugations.listConjugations)
        .post(conjugations.createConjugation);

    app.route('/api/conjugations/100')
        .get(conjugations.randomListConjugations);

    app.route('/verbs/:conjugationId')
        .get(conjugations.readConjugation)
        .put(conjugations.updateConjugation)
        .delete(conjugations.deleteConjugation);
};