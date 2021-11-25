let allObj = [];
let verbsArray = ["wohnen", "wollen", "zahlen", "zeigen", "ziehen"];

(async () => {
    for (let i = 0; i < verbsArray.length; i++) {
        const https = require('https')
        const options = {
            hostname: 'www.babla.ru',
            port: 443,
            path: '/%D1%81%D0%BF%D1%80%D1%8F%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/%D0%BD%D0%B5%D0%BC%D0%B5%D1%86%D0%BA%D0%B8%D0%B9/' + verbsArray[i],
            method: 'GET'
        }

        const StringDecoder = require('string_decoder').StringDecoder;

        const req = await https.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`)
            const decoder = new StringDecoder('utf8');
            let a = '';
            res.on('data', d => {
                const textChunk = decoder.write(d);
                a = a + textChunk
                // process.stdout.write(d)
                // console.log("===============h", a)
            })
            // const b = a.search("Проспрягать \"ändern\" - немецкое спряжение")
            setTimeout(() => {
                const begVerb = a.search("Проспрягать \"") + 13;
                const endVerb = begVerb + a.slice(begVerb, 500).search("\"");
                const verb = a.slice(begVerb, endVerb);
                console.log("verb", verb);

                console.log("Präsens");

                const beg1IchPresents = a.search("Indikativ Präsens") + 17;
                console.log(beg1IchPresents)
                const beg2IchPresents = beg1IchPresents + a.slice(beg1IchPresents).search("\"conj-result\">") + 14;
                const endIchPresents = beg2IchPresents + a.slice(beg2IchPresents).search("<");
                const conjIchPresents = a.slice(beg2IchPresents, endIchPresents);
                console.log("ich", conjIchPresents);

                const beg2DuPresents = endIchPresents + a.slice(endIchPresents).search("\"conj-result\">") + 14;
                const endDuPresents = beg2DuPresents + a.slice(beg2DuPresents).search("<");
                const conjDuPresents = a.slice(beg2DuPresents, endDuPresents);
                console.log("du", conjDuPresents);

                const beg2ErPresents = endDuPresents + a.slice(endDuPresents).search("\"conj-result\">") + 14;
                const endErPresents = beg2ErPresents + a.slice(beg2ErPresents).search("<");
                const conjErPresents = a.slice(beg2ErPresents, endErPresents);
                console.log("er", conjErPresents);

                const beg2WirPresents = endErPresents + a.slice(endErPresents).search("\"conj-result\">") + 14;
                const endWirPresents = beg2WirPresents + a.slice(beg2WirPresents).search("<");
                const conjWirPresents = a.slice(beg2WirPresents, endWirPresents);
                console.log("wir", conjWirPresents);

                const beg2IhrPresents = endWirPresents + a.slice(endWirPresents).search("\"conj-result\">") + 14;
                const endIhrPresents = beg2IhrPresents + a.slice(beg2IhrPresents).search("<");
                const conjIhrPresents = a.slice(beg2IhrPresents, endIhrPresents);
                console.log("ihr", conjIhrPresents);

                const beg2SiePresents = endIhrPresents + a.slice(endIhrPresents).search("\"conj-result\">") + 14;
                const endSiePresents = beg2SiePresents + a.slice(beg2SiePresents).search("<");
                const conjSiePresents = a.slice(beg2SiePresents, endSiePresents);
                console.log("Sie", conjSiePresents);

                console.log("Präteritum");

                const beg1IchPreteritum = a.search("Indikativ Präteritum") + 20;
                const beg2IchPreteritum = beg1IchPreteritum + a.slice(beg1IchPreteritum).search("\"conj-result\">") + 14;
                const endIchPreteritum = beg2IchPreteritum + a.slice(beg2IchPreteritum).search("<");
                const conjIchPreteritum = a.slice(beg2IchPreteritum, endIchPreteritum);
                console.log("ich", conjIchPreteritum);

                const beg2DuPreteritum = endIchPreteritum + a.slice(endIchPreteritum).search("\"conj-result\">") + 14;
                const endDuPreteritum = beg2DuPreteritum + a.slice(beg2DuPreteritum).search("<");
                const conjDuPreteritum = a.slice(beg2DuPreteritum, endDuPreteritum);
                console.log("du", conjDuPreteritum);

                const beg2ErPreteritum = endDuPreteritum + a.slice(endDuPreteritum).search("\"conj-result\">") + 14;
                const endErPreteritum = beg2ErPreteritum + a.slice(beg2ErPreteritum).search("<");
                const conjErPreteritum = a.slice(beg2ErPreteritum, endErPreteritum);
                console.log("er", conjErPreteritum);

                const beg2WirPreteritum = endErPreteritum + a.slice(endErPreteritum).search("\"conj-result\">") + 14;
                const endWirPreteritum = beg2WirPreteritum + a.slice(beg2WirPreteritum).search("<");
                const conjWirPreteritum = a.slice(beg2WirPreteritum, endWirPreteritum);
                console.log("wir", conjWirPreteritum);

                const beg2IhrPreteritum = endWirPreteritum + a.slice(endWirPreteritum).search("\"conj-result\">") + 14;
                const endIhrPreteritum = beg2IhrPreteritum + a.slice(beg2IhrPreteritum).search("<");
                const conjIhrPreteritum = a.slice(beg2IhrPreteritum, endIhrPreteritum);
                console.log("ihr", conjIhrPreteritum);

                const beg2SiePreteritum = endIhrPreteritum + a.slice(endIhrPreteritum).search("\"conj-result\">") + 14;
                const endSiePreteritum = beg2SiePreteritum + a.slice(beg2SiePreteritum).search("<");
                const conjSiePreteritum = a.slice(beg2SiePreteritum, endSiePreteritum);
                console.log("Sie", conjSiePreteritum);

                console.log("Perfekt");

                const beg1IchPerfect = a.search("Indikativ Perfekt") + 17;
                const beg2IchPerfect = beg1IchPerfect + a.slice(beg1IchPerfect).search("\"conj-result\">") + 14;
                const endIchPerfect = beg2IchPerfect + a.slice(beg2IchPerfect).search("<");
                const conjIchPerfect = a.slice(beg2IchPerfect, endIchPerfect);
                console.log("ich", conjIchPerfect);

                const beg2DuPerfect = endIchPerfect + a.slice(endIchPerfect).search("\"conj-result\">") + 14;
                const endDuPerfect = beg2DuPerfect + a.slice(beg2DuPerfect).search("<");
                const conjDuPerfect = a.slice(beg2DuPerfect, endDuPerfect);
                console.log("du", conjDuPerfect);

                const beg2ErPerfect = endDuPerfect + a.slice(endDuPerfect).search("\"conj-result\">") + 14;
                const endErPerfect = beg2ErPerfect + a.slice(beg2ErPerfect).search("<");
                const conjErPerfect = a.slice(beg2ErPerfect, endErPerfect);
                console.log("er", conjErPerfect);

                const beg2WirPerfect = endErPerfect + a.slice(endErPerfect).search("\"conj-result\">") + 14;
                const endWirPerfect = beg2WirPerfect + a.slice(beg2WirPerfect).search("<");
                const conjWirPerfect = a.slice(beg2WirPerfect, endWirPerfect);
                console.log("wir", conjWirPerfect);

                const beg2IhrPerfect = endWirPerfect + a.slice(endWirPerfect).search("\"conj-result\">") + 14;
                const endIhrPerfect = beg2IhrPerfect + a.slice(beg2IhrPerfect).search("<");
                const conjIhrPerfect = a.slice(beg2IhrPerfect, endIhrPerfect);
                console.log("ihr", conjIhrPerfect);

                const beg2SiePerfect = endIhrPerfect + a.slice(endIhrPerfect).search("\"conj-result\">") + 14;
                const endSiePerfect = beg2SiePerfect + a.slice(beg2SiePerfect).search("<");
                const conjSiePerfect = a.slice(beg2SiePerfect, endSiePerfect);
                console.log("Sie", conjSiePerfect);

                console.log("Plusquamperfekt");

                const beg1IchPlusquamperfekt = a.search("Indikativ Plusquamperfekt") + 25;
                const beg2IchPlusquamperfekt = beg1IchPlusquamperfekt + a.slice(beg1IchPlusquamperfekt).search("\"conj-result\">") + 14;
                const endIchPlusquamperfekt = beg2IchPlusquamperfekt + a.slice(beg2IchPlusquamperfekt).search("<");
                const conjIchPlusquamperfekt = a.slice(beg2IchPlusquamperfekt, endIchPlusquamperfekt);
                console.log("ich", conjIchPlusquamperfekt);

                const beg2DuPlusquamperfekt = endIchPlusquamperfekt + a.slice(endIchPlusquamperfekt).search("\"conj-result\">") + 14;
                const endDuPlusquamperfekt = beg2DuPlusquamperfekt + a.slice(beg2DuPlusquamperfekt).search("<");
                const conjDuPlusquamperfekt = a.slice(beg2DuPlusquamperfekt, endDuPlusquamperfekt);
                console.log("du", conjDuPlusquamperfekt);

                const beg2ErPlusquamperfekt = endDuPlusquamperfekt + a.slice(endDuPlusquamperfekt).search("\"conj-result\">") + 14;
                const endErPlusquamperfekt = beg2ErPlusquamperfekt + a.slice(beg2ErPlusquamperfekt).search("<");
                const conjErPlusquamperfekt = a.slice(beg2ErPlusquamperfekt, endErPlusquamperfekt);
                console.log("er", conjErPlusquamperfekt);

                const beg2WirPlusquamperfekt = endErPlusquamperfekt + a.slice(endErPlusquamperfekt).search("\"conj-result\">") + 14;
                const endWirPlusquamperfekt = beg2WirPlusquamperfekt + a.slice(beg2WirPlusquamperfekt).search("<");
                const conjWirPlusquamperfekt = a.slice(beg2WirPlusquamperfekt, endWirPlusquamperfekt);
                console.log("wir", conjWirPlusquamperfekt);

                const beg2IhrPlusquamperfekt = endWirPlusquamperfekt + a.slice(endWirPlusquamperfekt).search("\"conj-result\">") + 14;
                const endIhrPlusquamperfekt = beg2IhrPlusquamperfekt + a.slice(beg2IhrPlusquamperfekt).search("<");
                const conjIhrPlusquamperfekt = a.slice(beg2IhrPlusquamperfekt, endIhrPlusquamperfekt);
                console.log("ihr", conjIhrPlusquamperfekt);

                const beg2SiePlusquamperfekt = endIhrPlusquamperfekt + a.slice(endIhrPlusquamperfekt).search("\"conj-result\">") + 14;
                const endSiePlusquamperfekt = beg2SiePlusquamperfekt + a.slice(beg2SiePlusquamperfekt).search("<");
                const conjSiePlusquamperfekt = a.slice(beg2SiePlusquamperfekt, endSiePlusquamperfekt);
                console.log("Sie", conjSiePlusquamperfekt);

                const newConjObj = {
                    verb: verb,
                    prasents: [conjIchPresents, conjDuPresents, conjErPresents, conjWirPresents, conjIchPresents, conjSiePresents],
                    preteritum: [conjIchPreteritum, conjDuPreteritum, conjErPreteritum, conjWirPreteritum, conjIchPreteritum, conjSiePreteritum],
                    perfect: [conjIchPerfect, conjDuPerfect, conjErPerfect, conjWirPerfect, conjIchPerfect, conjSiePerfect],
                    plisconperfect: [conjIchPlusquamperfekt, conjDuPlusquamperfekt, conjErPlusquamperfekt, conjWirPlusquamperfekt, conjIchPlusquamperfekt, conjSiePlusquamperfekt],

                }
                allObj.push(newConjObj);
            }, 1000);

        })

        req.on('error', error => {
            console.error(error)
        })

        req.end()

    }
})()


setTimeout(() => {
    console.log(JSON.stringify(allObj));
}, 1000 * verbsArray.length);