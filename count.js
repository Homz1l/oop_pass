const csvtojson = require('csvtojson')
const fs = require('fs')

let csvfilepath = "./train_study_level.csv"

csvtojson()
    .fromFile(csvfilepath)
    .then((json) => {

        fs.writeFileSync("convert-tab3.json", JSON.stringify(json), "utf-8", (err) => {
            if (err) console.log(err)
        })

        var c1 = json.filter(t => t[`Negative for Pneumonia`] === '0')
        var c2 = json.filter(t => t[`Negative for Pneumonia`] === '1')
        var c3 = json.filter(t => t[`Typical Appearance`] === '0')
        var c4 = json.filter(t => t[`Typical Appearance`] === '1')
        var c5 = json.filter(t => t[`Indeterminate Appearance`] === '0')
        var c6 = json.filter(t => t[`Indeterminate Appearance`] === '1')
        var c7 = json.filter(t => t[`Atypical Appearance`] === '0')
        var c8 = json.filter(t => t[`Atypical Appearance`] === '1')
        var c9 = json.filter(t => t.id)
        let alldata = [];
        alldata.push(c1.length);
        alldata.push(c2.length);
        alldata.push(c3.length);
        alldata.push(c4.length);
        alldata.push(c5.length);
        alldata.push(c6.length);
        alldata.push(c7.length);
        alldata.push(c8.length);
        alldata.push(c9.length);
        fs.writeFileSync("Count-tab3.json", JSON.stringify(alldata), "utf-8", (err) => {
            if (err) console.log(err)
        })

    })