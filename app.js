// on veut créer un générateur d'objet sous la forme objet = [{objet1}, {objet2}, {objet3}]. Ce générateur prendra en clé des valeurs aléatoire et prendra en valeurs, des valeurs aléatoire.

const express = require('express');
const app = express()
const PORT = 3000
const data = require('./data.js');
const generator = require('./generator.js');

app.get('/', (req, res) => {

    let randomobjet = generator.generatorOneObject(2)
    let multipleObjet = generator.generatorMultipleObjetct(2,2)
    let simpleArray = generator.randomElementInArray(4)

    console.log(randomobjet)
    console.log(multipleObjet)
    console.log(simpleArray)

    let newKey = 'name';
    randomobjet[newKey] = 'Pierre'

    console.log(randomobjet)

    res.send('')
})


app.listen(PORT, console.log(`server ok at http://localhost:${PORT}`))