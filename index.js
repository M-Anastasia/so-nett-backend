const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const verbs = require('./api/controllers/verbs-controller');
const cors = require('cors');

app.use(cors({
    origin: '*'
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.Promise = global.Promise;

// todo replace with environment variable
const connectionUrl = "mongodb+srv://<user>:<password>@so-nett.ipaoy.mongodb.net/so-nett?retryWrites=true&w=majority";
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const routes = require('./api/routes/routes.js');

routes(app);

app.listen(port, () => {
    console.log(`RESTful API server running on ${port}`);
});

// console.log("callback start");
// const data = Object.values(JSON.parse(fs.readFileSync("top100_final.txt")));
// console.log(data[0]);
// const verbsArray = [];
// for (let i = 0; i < 111; i++) {
//     // mongoose.connection.collection('verbs').insertOne({verb: data[i].verb});
//     mongoose.connection.collection('verbs').findOne({verb: data[i].verb}, (err, res) => {
//         // console.log(res);
//         const verb = {
//             _id: res._id,
//             verb: data[i].verb
//         }
//         verbsArray.push(verb);
//     })
// }
// console.log(verbsArray);
// const pronounsArray = [
//     {_id: "61954572d2b58640118040c9", pronoun: "ich"},
//     {_id: "61954578d2b58640118040cb", pronoun: "du"},
//     {_id: "6195459bd2b58640118040cd", pronoun: "er/sie/es"},
//     {_id: "619545a8d2b58640118040cf", pronoun: "wir"},
//     {_id: "619545b0d2b58640118040d1", pronoun: "ihr"},
//     {_id: "619545bbd2b58640118040d3", pronoun: "sie/Sie"}];
// const tensesArray = [
//     {_id: "61954616d2b58640118040d7", tense: "Präsens"},
//     {_id: "61954641d2b58640118040d9", tense: "Präteritum"},
//     {_id: "61954649d2b58640118040db", tense: "Perfekt"},
//     {_id: "61954655d2b58640118040dd", tense: "Plusquamperfekt"}];
// setTimeout(() => {
//         // console.log(verbsArray);
//         // console.log(pronounsArray);
//         // console.log(tensesArray);
//
//         for (let i = 0; i < 111; i++) {
//             // const newConjArray = [];
//             for (let k = 0; k < 4; k++) {
//                 for (let j = 0; j < 6; j++) {
//                     let conj = "";
//                     if (k === 0) {
//                         conj = data[i].prasents[j];
//                     } else if (k === 1) {
//                         conj = data[i].preteritum[j];
//                     } else if (k === 2) {
//                         conj = data[i].perfect[j];
//                     } else if (k === 3) {
//                         conj = data[i].plisconperfect[j];
//                     }
//                     const newConj = {
//                         verb: data[i].verb,
//                         pronoun: pronounsArray[j].pronoun,
//                         tense: tensesArray[k].tense,
//                         conjugation: conj
//                     }
//                     mongoose.connection.collection('conjugations').insertOne(newConj);
//                     // console.log(newConj)
//                 }
//             }
//         }
//     },
//     5000
// );
//
//
// console.log("callback end");